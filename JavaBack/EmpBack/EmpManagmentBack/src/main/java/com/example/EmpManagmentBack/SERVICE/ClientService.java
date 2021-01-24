package com.example.EmpManagmentBack.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmpManagmentBack.Model.Client;
import com.example.EmpManagmentBack.REPO.ClientRepo;

@Service
public class ClientService {

	@Autowired
	private ClientRepo clientRepository;
	
	
	
	//fetching all Client
	public List<Client> getAllClient(){
		List<Client> cli = (List<Client>)clientRepository.findAll(); 
		return cli;
	}
	
	
	 // inserting Client
	public void addClient(Client cl) {
		clientRepository.save(cl);
	}
	
	
	
	
	
	
	
	
	
	
	
		// deleting Client by id
		 public void deleteClient(String id){
			 clientRepository.deleteById(id);
		}
			
	
	
	
	
	
	
	
	
	
	
}
