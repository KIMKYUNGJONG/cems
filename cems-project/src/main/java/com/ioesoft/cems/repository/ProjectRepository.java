package com.ioesoft.cems.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ioesoft.cems.model.Project;
import com.ioesoft.cems.model.ProjectDao;

public interface ProjectRepository extends CrudRepository<ProjectDao, Integer> {

	@Query(
			value = "UPDATE project SET user_id = ?1 WHERE name = ?2",
			nativeQuery = true
	)
	void updateUserIdByName(long user_id, String projectName);

	@Query(
			value = "SELECT COUNT(user_id) FROM project WHERE name = ?2 and user_id != ?1",
			nativeQuery = true
	)
	int isUserIdExist(long user_id, String projectName);

	@Query(
			value = "UPDATE project SET user_id = null WHERE user_id = ?1",
			nativeQuery = true
	)
	void updateUserId(long user_id);

	ProjectDao findById(long id);

	ProjectDao save(Project project);

	@Query(
			value = "UPDATE project "
					+ "SET name = ?2"
					+ ", scene_name = ?3"
					+ ", application_id = ?4"
					+ ", sms_number1 = ?5"
					+ ", sms_number2 = ?6"
					+ ", note = ?7"
					+ ", url = ?8"
					+ " WHERE id = ?1",
			nativeQuery = true
	)
	void update(long id, String name, String scene_name, String application_id, String sms_number1, String sms_number2,
			String note, String url);

	@Query(
			value = "DELETE FROM project WHERE id = ?1",
			nativeQuery = true
	)
	void deleteById(long id);

}
