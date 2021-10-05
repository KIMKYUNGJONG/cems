package com.ioesoft.cems.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.Nullable;

@Entity
@Table(name = "project")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProjectDao implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

//    @ManyToOne
//    @JoinColumn(name="user_id")
//    @JsonManagedReference
//	private UserDao user;
	
	@Column
	@Nullable
	private Integer user_id;

	@Column
	private String name;
	@Column
	private String application_id;
	@Column
	private String sms_number1;
	@Column
	private String sms_number2;
	@Column
	private Date created_at;
	@Column
	private String url;
	@Column
	@Nullable
	@Lob
	private String note;
	@Column
	private String scene_name;
	
	public ProjectDao() {
	}

	public ProjectDao(Project project) {
		this.id = project.getId();
//		this.user_id = (int) project.getUser_id();
		this.name = project.getName();
		this.application_id = project.getApplication_id();
		this.sms_number1 = project.getSms_number1();
		this.sms_number2 = project.getSms_number2();
//		this.created_at = created_at;
		this.url = project.getUrl();
		this.note = project.getNote();
		this.scene_name = project.getScene_name();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

//	public UserDao getUser() {
//		return user;
//	}
//
//	public void setUser(UserDao user) {
//		this.user = user;
//	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getApplication_id() {
		return application_id;
	}

	public void setApplication_id(String application_id) {
		this.application_id = application_id;
	}

	public String getSms_number1() {
		return sms_number1;
	}

	public void setSms_number1(String sms_number1) {
		this.sms_number1 = sms_number1;
	}

	public String getSms_number2() {
		return sms_number2;
	}

	public void setSms_number2(String sms_number2) {
		this.sms_number2 = sms_number2;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getScene_name() {
		return scene_name;
	}

	public void setScene_name(String scene_name) {
		this.scene_name = scene_name;
	}
}

