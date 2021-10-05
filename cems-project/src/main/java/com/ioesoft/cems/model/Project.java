package com.ioesoft.cems.model;

import java.sql.Date;

public class Project {

	private long id;
	private Integer user_id;
	private String name;
	private String application_id;
	private String sms_number1;
	private String sms_number2;
	private Date created_at;
	private String url;
	private String note;
	private String scene_name;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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
