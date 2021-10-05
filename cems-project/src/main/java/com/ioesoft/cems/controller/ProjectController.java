package com.ioesoft.cems.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ioesoft.cems.model.Project;
import com.ioesoft.cems.model.ProjectDao;
import com.ioesoft.cems.model.User;
import com.ioesoft.cems.model.UserDao;
import com.ioesoft.cems.service.ProjectService;

@RestController
@CrossOrigin
public class ProjectController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
    @Autowired
    private ProjectService projectService;    

    @RequestMapping(value = "/api/getProjects", method = RequestMethod.GET)
	public ResponseEntity<?> getProjects() throws Exception {
    	Iterable<ProjectDao> projectList = projectService.findAll();
    	
    	return ResponseEntity.ok(projectList);
    }    
    
    @RequestMapping(value = "/api/addOrUpdateProject", method = RequestMethod.POST)
	public ResponseEntity<?> addOrUpdateProject(@RequestBody Project project) throws Exception { 
		ProjectDao newProject = null;
    	
    	try {
    		System.out.println("project.getid " + project.getId());
    		System.out.println("project.getId() == 0 " + (project.getId() == 0));
    		
    		if(project.getId() == 0) { // 신규 
    			
    			System.out.println("111111");
    			
    			newProject = projectService.save(project);
    		} else { // 수정 
    			System.out.println("2222222");
    			
    			projectService.update(project);
    			newProject = projectService.findById(project.getId());
    		}

    	}catch(Exception e) {
    		System.out.println(e.getMessage());
    		
    		logger.debug(e.getMessage());
    	}
    	
    	return ResponseEntity.ok(newProject);
    }

    @RequestMapping(value = "/api/deleteProjectById", method = RequestMethod.GET)
	public void deleteProjectById(@RequestParam long id) throws Exception {    	
    	try {
        	ProjectDao project = projectService.findById(id);
        	if(project.getUser_id() != null) {        		
        		logger.debug("Assign 된 사용자 존재 ! 삭제 불가능");
        		
        	}else {
            	// 프로젝트 삭제 
            	 projectService.deleteById(id);    	
        	}
    	}catch(Exception e) {
//    		System.out.println(e.getMessage());    		
    		logger.debug(e.getMessage());
    	}
    	
    }
}
