package com.ioesoft.cems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ioesoft.cems.model.Project;
import com.ioesoft.cems.model.ProjectDao;
import com.ioesoft.cems.model.UserDao;
import com.ioesoft.cems.repository.ProjectRepository;
import com.ioesoft.cems.repository.UserRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	public Iterable<ProjectDao> findAll() {
		return projectRepository.findAll();
	}

	public void updateUserIdByName(long user_id, String projectName) {
		projectRepository.updateUserIdByName(user_id, projectName);		
	}

	public int isUserIdExist(long user_id, String projectName) {
		return projectRepository.isUserIdExist(user_id, projectName);
	}

	public void updateUserId(long user_id) {
		projectRepository.updateUserId(user_id);
		
	}

	public ProjectDao findById(long id) {
		return projectRepository.findById(id);
	}

	public ProjectDao save(Project project) {
		ProjectDao newProject = new ProjectDao(project);
		return projectRepository.save(newProject);		
	}

	public void update(Project project) {
		projectRepository.update(project.getId(), project.getName(), project.getScene_name(), project.getApplication_id(), project.getSms_number1(), project.getSms_number2(), project.getNote(), project.getUrl());
		
	}

	public void deleteById(long id) {
		projectRepository.deleteById(id);		
	}
}
