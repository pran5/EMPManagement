package com.example.EmpManagmentBack.Model;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name="pushnotification")
public class Pushnotification {
	@Column(name=" PN_No")
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id 
	private String  PN_No;
	
	
	
	@OneToOne(cascade = CascadeType.ALL,  orphanRemoval=true)
    @JoinColumn(name = "PN_Emp_Id", referencedColumnName = "Emp_Id",insertable = false, updatable = false)
    private Employee employee;  
	
	
	
	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}



	
	
	
	
	
	

	private String  PN_Subject, PN_Message,PN_Emp_Id;
	private enum PN_Level{A,M,T};
	private Date PN_Date_Time;
	   
	public Pushnotification() {
		super();
	}

	public String getPN_No() {
		return PN_No;
	}

	public void setPN_No(String pN_No) {
		PN_No = pN_No;
	}

	public String getPN_Subject() {
		return PN_Subject;
}

	public void setPN_Subject(String pN_Subject) {
		PN_Subject = pN_Subject;
	}

	public String getPN_Message() {
		return PN_Message;
	}

	public void setPN_Message(String pN_Message) {
		PN_Message = pN_Message;
	}

	public String getPN_Emp_Id() {
		return PN_Emp_Id;
	}

	public void setPN_Emp_Id(String pN_Emp_Id) {
		PN_Emp_Id = pN_Emp_Id;
	}

	public Date getPN_Date_Time() {
		return PN_Date_Time;
	}

	public void setPN_Date_Time(Date pN_Date_Time) {
		PN_Date_Time = pN_Date_Time;
	}


	
	
	@Enumerated( EnumType.STRING)
	private  PN_Level pn_Level;

	public PN_Level getPn_Level() {
		return pn_Level;
	}

	public void setPn_Level(PN_Level pn_Level) {
		this.pn_Level = pn_Level;
	}
	
	
	
	
	
}
