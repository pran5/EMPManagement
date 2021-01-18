package com.example.EmpManagmentBack;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="manager")
public class Manager {
	
	@Column(name="M_Id")
	@Id
	private String M_Id;
	private String M_Emp_Id, M_Project_Id;
	public String getM_Id() {
		return M_Id;
	}
	public void setM_Id(String m_Id) {
		M_Id = m_Id;
	}
	public String getM_Emp_Id() {
		return M_Emp_Id;
	}
	public void setM_Emp_Id(String m_Emp_Id) {
		M_Emp_Id = m_Emp_Id;
	}
	public String getM_Project_Id() {
		return M_Project_Id;
	}
	public void setM_Project_Id(String m_Project_Id) {
		M_Project_Id = m_Project_Id;
	}
	public Manager(String m_Id, String m_Emp_Id, String m_Project_Id) {
		super();
		M_Id = m_Id;
		M_Emp_Id = m_Emp_Id;
		M_Project_Id = m_Project_Id;
	}
	public Manager() {
		
	}
	
	
	

}
