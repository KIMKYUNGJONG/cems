package com.ioesoft.cems.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ioesoft.cems.model.User;
import com.ioesoft.cems.model.UserDao;
import com.ioesoft.cems.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {    	    	
    	UserDao user = userRepository.findByUsername(username);
    	
		if (user == null) {
			throw new UsernameNotFoundException("User not found with UserID: " + username);
		}    	
    	    	
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());

    }

	public UserDao findUserByUsername(String username) {
    	return userRepository.findByUsername(username);
	}

	public Iterable<UserDao> findAll() {
		return userRepository.findAll();
	}

	public UserDao findUserById(long id) {
		return userRepository.findById(id);
	}

	public UserDao save(User user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));		
		UserDao newUser = new UserDao(user);
		
		return userRepository.save(newUser);
	}

	public void update(User user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));	
		userRepository.update(user.getId(), user.getPassword(), user.getManager_name(), user.getContact_number(), user.getEmail(), user.getNote());
		
	}

	public void deleteById(long user_id) {
		userRepository.deleteById(user_id);		
	}
}
