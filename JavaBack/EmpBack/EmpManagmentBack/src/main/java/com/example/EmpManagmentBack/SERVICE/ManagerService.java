package com.example.EmpManagmentBack.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.EmpManagmentBack.Model.Manager;

import com.example.EmpManagmentBack.REPO.ManagerRepo;
@Service
public class ManagerService {

	@Autowired
	private ManagerRepo managerRepo;
	
	// fetching all employees
	public List<Manager> getAllManager(){
		List<Manager> manag = (List<Manager>)managerRepo.findAll(); 
		return manag;
	}
	
	
}
