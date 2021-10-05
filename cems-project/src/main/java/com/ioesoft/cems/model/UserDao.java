package com.ioesoft.cems.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.Nullable;

@Entity
@Table(name = "user")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class UserDao implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	@Column
	private String username;	

	@Column
	@JsonIgnore
	private String password;

	@Column
	private String company_name;
	
	@Column
	private String manager_name;
	
	@Column
	@Nullable
	private String contact_number;
	
	@Column
	@Nullable
	private String email;
	
	@Column
	@Nullable
	@Lob
	private String note;
	

	@OneToMany
	@JoinColumn(name = "user_id")
	private List<ProjectDao> projects = new ArrayList<ProjectDao>();

	@Transient
	private List<String> projectNameList = new ArrayList<String>();
	
	public UserDao() {
		
	}
	
	public UserDao(User user) {
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.company_name = user.getCompany_name();
		this.manager_name = user.getManager_name();
		this.contact_number = user.getContact_number();
		this.email = user.getEmail();
		this.note = user.getNote();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getManager_name() {
		return manager_name;
	}

	public void setManager_name(String manager_name) {
		this.manager_name = manager_name;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public List<ProjectDao> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectDao> projects) {
		this.projects = projects;
	}

	public List<String> getProjectNameList() {
		List<String> list = new ArrayList<String>();
;
		for(ProjectDao project : projects) {
			list.add(project.getName());
		}
		return list;
	}
	
}
