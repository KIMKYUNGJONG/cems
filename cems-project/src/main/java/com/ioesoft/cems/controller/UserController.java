package com.ioesoft.cems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ioesoft.cems.config.JwtTokenUtil;
import com.ioesoft.cems.model.JwtRequest;
import com.ioesoft.cems.model.JwtResponse;
import com.ioesoft.cems.model.ProjectDao;
import com.ioesoft.cems.model.User;
import com.ioesoft.cems.model.UserDao;
import com.ioesoft.cems.service.ProjectService;
import com.ioesoft.cems.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin
public class UserController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;    

    @Autowired
    private ProjectService projectService;    
    
    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
    	
    	try {
           	authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());    	   	
            final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
            final String token = jwtTokenUtil.generateToken(userDetails);                                
            UserDao loginUser = userService.findUserByUsername(authenticationRequest.getUsername());                        
            	        	
            return ResponseEntity.ok(
            		new JwtResponse(token, loginUser.getId(), loginUser.getUsername()));            	
    		
    	}catch(Exception e) {
    		logger.debug(e.getMessage());
        	return ResponseEntity.ok("error");
    	}

    }

    private void authenticate(String username, String password) throws Exception {    	
        try {        	
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        } catch (Exception e) {
        	System.out.println(e.getMessage());
        }
    }    

    @RequestMapping(value = "/api/getUsers", method = RequestMethod.GET)
	public ResponseEntity<?> getUsers() throws Exception {
    	Iterable<UserDao> userList = userService.findAll();
    	
    	return ResponseEntity.ok(userList);
    }

    @RequestMapping(value = "/api/addOrUpdateUser", method = RequestMethod.POST)
	public ResponseEntity<?> addOrUpdateUser(@RequestBody User user) throws Exception {    	
    	
    	String message = "";
    			
    	try {
        	UserDao existingUser = userService.findUserById(user.getId());
        	UserDao newUser = null;
        	
    		if(existingUser == null) { // ?????? ??????    		    			
    			// ????????? ID ????????? ??????
    			if(userService.findUserByUsername(user.getUsername()) != null) {
    				message += "????????? ????????? ID ?????????.";
    			}else {
    				newUser = userService.save(user);
    			}   			    	
    			
    		}else { // edit ??????
    			userService.update(user);
    			newUser = userService.findUserById(user.getId());    			
    		}
    		
    		// ?????? - ???????????? ?????? 			
			if(user.getProjectNameList().size() > 0) {    				
				for(int i = 0; i < user.getProjectNameList().size(); i++) {
					var projectName = user.getProjectNameList().get(i);    					
					if(projectService.isUserIdExist(user.getId(), projectName) > 0) {
    					// ?????? ????????? ?????????????????? ?????? ??????????????? ??????????????? !!
						message += projectName + " : ?????? ????????? ????????? ?????? ?????????????????????.\n";    						
					}else {
    					projectService.updateUserIdByName(newUser.getId(), projectName);
					}  					
				}
			}			
			
			if("".equals(message)) {
    			return ResponseEntity.ok(newUser);    				
			}else {
				return ResponseEntity.ok(message);
			}
    		
    	}catch(Exception e) {
    		logger.debug(e.getMessage());
    	}
    	
    	return ResponseEntity.ok(message);
    	
    }

    @RequestMapping(value = "/api/deleteUserById", method = RequestMethod.GET)
	public void deleteUserById(@RequestParam long user_id) throws Exception {
    	try {
        	// ??????????????? user_id null ??? ???????????? 
        	projectService.updateUserId(user_id);
        	
        	// ????????? ?????? 
        	userService.deleteById(user_id);    	

    	}catch(Exception e) {
//    		System.out.println(e.getMessage());    		
    		logger.debug(e.getMessage());
    	}
    }
}
