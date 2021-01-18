package com.example.EmpManagmentBack.REPO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.EmpManagmentBack.Model.Ticket;



@Repository
public interface TicketRepo extends CrudRepository<Ticket,String>{

}
