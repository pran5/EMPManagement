package com.example.EmpManagmentBack.REPO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.EmpManagmentBack.Model.Resourcerequests;
@Repository
public interface ResourceRepo extends CrudRepository<Resourcerequests,String>{
	
	@Query("from Resourcerequests where RR_Emp_Id = :x")
	List<Resourcerequests> getbyEid(@Param("x") String x);

}
