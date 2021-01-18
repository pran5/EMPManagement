package com.example.EmpManagmentBack.REPO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Manager;


@Repository
public interface ManagerRepo extends CrudRepository<Manager,String>{

}
