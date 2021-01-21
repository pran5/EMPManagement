package com.example.EmpManagmentBack.SERVICE;

import java.util.List;
import java.util.Optional;

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
	
 // fetching ticket by id
	public Optional<Ticket> getTicket_No(String id){
		return ticketRepo.findById(id);
	
}
	
	
// inserting ticket
	public void addTicket(Ticket e) {
		ticketRepo.save(e);
	}
	
		
// updating ticket by id
		public Ticket updateTicket(Ticket tk){
		
			ticketRepo.save(tk);
			return tk;
		
		}
			
	
	
	
	
	
	
	
	
}