package com.example.EmpManagmentBack.REPO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.EmpManagmentBack.Model.Ticket;




@Repository
public interface TicketRepo extends CrudRepository<Ticket,String>{

	
	
	
	@Query("from Ticket where KProject_Id = :x")
	List<Ticket> findTByProjectID(@Param("x") String x);
	
	
	
	
	
	@Query("from Ticket where KEmp_Id = :x")
	List<Ticket> findT(@Param("x") String x);

	
	
}
