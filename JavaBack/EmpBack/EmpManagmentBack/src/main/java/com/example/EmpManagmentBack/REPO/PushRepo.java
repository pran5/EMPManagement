package com.example.EmpManagmentBack.REPO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.example.EmpManagmentBack.Model.Pushnotification;

@Repository
public interface PushRepo extends CrudRepository<Pushnotification,String>{
}
