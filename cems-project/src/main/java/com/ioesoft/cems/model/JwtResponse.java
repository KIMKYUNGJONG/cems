package com.ioesoft.cems.model;

import java.io.Serializable;
import java.util.List;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    
    private final long user_id;
    private final String name;

    public JwtResponse(String jwttoken, long user_id, String name) {
        this.jwttoken = jwttoken;
        
        this.user_id = user_id;
        this.name = name;
    }

    public String getToken() {
        return this.jwttoken;
    }

	public long getUser_id() {
		return user_id;
	}

	public String getName() {
		return name;
	}
	
}
