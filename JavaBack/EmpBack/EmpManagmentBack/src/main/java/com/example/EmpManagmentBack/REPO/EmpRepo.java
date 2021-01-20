package com.example.EmpManagmentBack.REPO;

import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Employee;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

@Repository
public interface EmpRepo extends CrudRepository<Employee,String> {
	
	
	
	
	


}





