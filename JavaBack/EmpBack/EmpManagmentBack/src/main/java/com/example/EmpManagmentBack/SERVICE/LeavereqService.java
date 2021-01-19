package com.example.EmpManagmentBack.SERVICE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmpManagmentBack.Model.Leaverequests;

import com.example.EmpManagmentBack.REPO.LeavereqRepo;


@Service
public class LeavereqService {

	
	@Autowired
	private LeavereqRepo leavereqRepo;
	
	// fetching all Leaverequests
	public List<Leaverequests> getAllLeaverequests(){
		List<Leaverequests> levreq = (List<Leaverequests>)leavereqRepo.findAll(); 
		return levreq;
	}
	
	// fetching Leaverequests by id
			public Optional<Leaverequests> getLRequest_Id(String id){
				return leavereqRepo.findById(id);
			}
			
	
	
	
}
