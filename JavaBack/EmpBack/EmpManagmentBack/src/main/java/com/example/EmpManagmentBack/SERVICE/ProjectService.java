package com.example.EmpManagmentBack.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmpManagmentBack.Model.Project;
import com.example.EmpManagmentBack.REPO.ProjectRepo;


@Service
public class ProjectService {
	@Autowired
	private ProjectRepo projectRepo;
	
	// fetching all employees
	public List<Project> getAllProject(){
		List<Project> proj = (List<Project>)projectRepo.findAll(); 
		return proj;
	}
	
}
