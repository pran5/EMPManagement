package com.example.EmpManagmentBack.REPO;

import org.springframework.stereotype.Repository;
import com.example.EmpManagmentBack.Model.Employee;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



@Repository
public interface EmpRepo extends CrudRepository<Employee,String> {
	
	//@Modifying
	//@Query(value="delete from employee b where b.Emp_Id=?1", nativeQuery=true)
	//void deleteEmployeeByID (String Emp_Id);
	
	

}





