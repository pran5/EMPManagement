package com.example.EmpManagmentBack.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.EmpManagmentBack.Model.Ticket;

import com.example.EmpManagmentBack.REPO.TicketRepo;

@Service
public class TicketService {

	@Autowired
	private TicketRepo ticketRepo;
	
	// fetching all ticket
	public List<Ticket> getAllTicket(){
		List<Ticket> tk = (List<Ticket>)ticketRepo.findAll(); 
		return tk;
	}
	
	
	
	
}