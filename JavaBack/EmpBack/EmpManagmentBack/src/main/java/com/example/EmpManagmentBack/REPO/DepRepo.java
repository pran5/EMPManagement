package com.example.EmpManagmentBack.REPO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Department;

@Repository
public interface DepRepo extends CrudRepository<Department,String>{

}
