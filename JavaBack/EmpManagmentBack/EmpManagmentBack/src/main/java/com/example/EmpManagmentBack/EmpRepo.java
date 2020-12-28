package com.example.EmpManagmentBack;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EmpRepo extends JpaRepository<Emp,String> {

}
