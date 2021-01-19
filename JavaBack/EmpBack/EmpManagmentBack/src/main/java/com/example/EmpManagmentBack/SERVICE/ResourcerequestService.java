package com.example.EmpManagmentBack.SERVICE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmpManagmentBack.Model.Resourcerequests;
import com.example.EmpManagmentBack.REPO.ResourceRepo;

@Service
public class ResourcerequestService {
	
	
	@Autowired
	private ResourceRepo resourceRepo;
	
	// fetching all resourcerequests
	public List<Resourcerequests> getAllResourcerequests(){
		List<Resourcerequests> res = (List<Resourcerequests>)resourceRepo.findAll(); 
		return res;
	}
	// fetching resourcerequests by id
			public Optional<Resourcerequests> getRR_Id(String id){
				return resourceRepo.findById(id);
			}
	

}
