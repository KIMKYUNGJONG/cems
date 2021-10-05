package com.ioesoft.cems.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ioesoft.cems.model.User;
import com.ioesoft.cems.model.UserDao;

public interface UserRepository extends CrudRepository<UserDao, Integer> {
	UserDao findByUsername(String username);

	UserDao findById(long id);

	UserDao save(User user);

	@Query(
			value = "UPDATE user "
					+ "SET password = ?2"
					+ ", manager_name = ?3"
					+ ", contact_number = ?4"
					+ ", email = ?5"
					+ ", note = ?6"
					+ " WHERE id = ?1",
			nativeQuery = true
	)
	void update(long id, String password, String manager_name, String contact_number, String email, String note);

	@Query(
			value = "DELETE FROM user WHERE id = ?1",
			nativeQuery = true
	)
	void deleteById(long user_id);

}
