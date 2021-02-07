package com.example.EmpManagmentBack.REPO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Project;



@Repository
public interface ProjectRepo extends CrudRepository<Project,String>{

	@Query("from Project where Project_M_Id = :x")
	Project getbyMid(@Param("x") String x);
	
	
}
