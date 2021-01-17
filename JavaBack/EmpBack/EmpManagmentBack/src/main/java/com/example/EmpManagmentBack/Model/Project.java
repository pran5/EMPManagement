package com.example.EmpManagmentBack.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="project")
public class Project {
	@Column(name=" Project_Id")
	@Id
	private String  Project_Id;
	
	
	
	
	
	private String Project_Name, Project_Client_Id,Project_M_Id,Project_Description,Project_Technology;
	private float Project_Duration;
	private Date Project_Start_Date;
	
	public Project() {
		super();
	}

	public String getProject_Id() {
		return Project_Id;
	}

	public void setProject_Id(String project_Id) {
		Project_Id = project_Id;
	}

	public String getProject_Name() {
		return Project_Name;
	}

	public void setProject_Name(String project_Name) {
		Project_Name = project_Name;
	}

	public String getProject_Client_Id() {
		return Project_Client_Id;
	}

	public void setProject_Client_Id(String project_Client_Id) {
		Project_Client_Id = project_Client_Id;
	}

	public String getProject_M_Id() {
		return Project_M_Id;
	}

	public void setProject_M_Id(String project_M_Id) {
		Project_M_Id = project_M_Id;
	}

	public String getProject_Description() {
		return Project_Description;
	}

	public void setProject_Description(String project_Description) {
		Project_Description = project_Description;
	}

	public String getProject_Technology() {
		return Project_Technology;
	}

	public void setProject_Technology(String project_Technology) {
		Project_Technology = project_Technology;
	}

	public float getProject_Duration() {
		return Project_Duration;
	}

	public void setProject_Duration(float project_Duration) {
		Project_Duration = project_Duration;
	}

	public Date getProject_Start_Date() {
		return Project_Start_Date;
	}

	public void setProject_Start_Date(Date project_Start_Date) {
		Project_Start_Date = project_Start_Date;
	}

	
	
	
}
