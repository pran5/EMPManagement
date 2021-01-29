package com.example.EmpManagmentBack.REPO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Leaverequests;



@Repository
public interface LeavereqRepo extends CrudRepository<Leaverequests,String>{

	@Query("from Leaverequests where LRequest_Emp_Id = :x")
	List<Leaverequests> getbyEid(@Param("x") String x);
}


