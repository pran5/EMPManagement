package com.example.EmpManagmentBack.REPO;

import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Employee;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface EmpRepo extends CrudRepository<Employee,String> {




}