package com.example.EmpManagmentBack.Model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="resourcerequests")
public class Resourcerequests {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name=" RR_Id")
	private int  RR_Id;
	
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "RR_Emp_Id", referencedColumnName = "Emp_Id",insertable = false, updatable = false)
    private Employee employee;  
	
	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	
	
	
	
	
	
	
	
	
	private String  RR_Emp_Id, RR_Name,RR_Description;
	private int RR_Status;
	private Date RR_Date;

	public int getRR_Id() {
		return RR_Id;
	}

	public void setRR_Id(int rR_Id) {
		RR_Id = rR_Id;
	}

	public String getRR_Emp_Id() {
		return RR_Emp_Id;
	}

	public void setRR_Emp_Id(String rR_Emp_Id) {
		RR_Emp_Id = rR_Emp_Id;
	}

	public String getRR_Name() {
		return RR_Name;
	}

	public void setRR_Name(String rR_Name) {
		RR_Name = rR_Name;
	}

	public String getRR_Description() {
		return RR_Description;
	}

	public void setRR_Description(String rR_Description) {
		RR_Description = rR_Description;
	}

	public int getRR_Status() {
		return RR_Status;
	}

	public void setRR_Status(int rR_Status) {
		RR_Status = rR_Status;
	}

	public Date getRR_Date() {
		return RR_Date;
	}

	public void setRR_Date(Date rR_Date) {
		RR_Date = rR_Date;
	}
	



}
