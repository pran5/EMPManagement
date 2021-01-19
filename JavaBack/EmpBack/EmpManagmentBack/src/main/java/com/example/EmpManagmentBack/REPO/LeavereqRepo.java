package com.example.EmpManagmentBack.REPO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Leaverequests;


@Repository
public interface LeavereqRepo extends CrudRepository<Leaverequests,String>{

}


