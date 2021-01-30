package com.example.EmpManagmentBack.REPO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.EmpManagmentBack.Model.Team;
@Repository
 public interface TeamRepo extends CrudRepository<Team,Integer>{

	
	
	 @Query("SELECT COUNT(u) FROM Team u WHERE u.T_Emp_Id=:id")
	    long aMethodNameOrSomething(@Param("id") String id);
		
	 
	
	 @Query("from Team where T_Emp_Id = :x")
		List<Team> getAllbyEid(@Param("x") String x);
	
	
	@Query("from Team where Team_M_Id = :x")
	List<Team> findM(@Param("x") String x);
	
	@Query("from Team where Team_M_Id = :x and T_Emp_Id = :y")
	Team findByMidnEid(@Param("x") String x,@Param("y") String y);
	

}
