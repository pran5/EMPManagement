package com.example.EmpManagmentBack.REPO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.EmpManagmentBack.Model.Resourcerequests;
@Repository
public interface ResourceRepo extends CrudRepository<Resourcerequests,String>{

}
