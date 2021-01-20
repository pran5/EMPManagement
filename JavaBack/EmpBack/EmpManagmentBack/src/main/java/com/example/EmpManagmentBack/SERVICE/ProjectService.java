package com.example.EmpManagmentBack.SERVICE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmpManagmentBack.Model.Project;
import com.example.EmpManagmentBack.REPO.ProjectRepo;


@Service
public class ProjectService {
	@Autowired
	private ProjectRepo projectRepo;
	
	// fetching all project
	public List<Project> getAllProject(){
		List<Project> proj = (List<Project>)projectRepo.findAll(); 
		return proj;
	}
	// fetching Project by id
			public Optional<Project> getProject_Id(String id){
				return projectRepo.findById(id);
			}
			
	 // inserting Project
			public void addProject(Project e) {
				projectRepo.save(e);
			}
			
			
// updating Project by id
			public void updateProject(Project pr, String id){
			if(id == pr.getProject_Id()) {
				projectRepo.save(pr);
				}
			}		
			
		
			
			
			
			
			
			
}
