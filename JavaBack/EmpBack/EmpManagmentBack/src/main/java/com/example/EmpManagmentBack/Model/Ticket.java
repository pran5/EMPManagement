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
@Table(name="ticket")
public class Ticket {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name=" Ticket_No")
	
	private int  Ticket_No;
	
	
	
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "KProject_Id", referencedColumnName = "Project_Id",insertable = false, updatable = false)
    private Project project;  
	
	
	

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}



	
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "KEmp_Id", referencedColumnName = "Emp_Id",insertable = false, updatable = false)
    private Employee employee;  
	
	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}





	
	
	
	
	
	private String  KProject_Id, KEmp_Id,Ticket_Type,Ticket_Details,Ticket_Status;
	private enum Ticket_Priority{H,L,M};
	private Date Ticket_Update;
	  
	public Ticket() {
		super();
	}

	public int getTicket_No() {
		return Ticket_No;
	}

	public void setTicket_No(int ticket_No) {
		Ticket_No = ticket_No;
	}

public String getKProject_Id() {
		return KProject_Id;
	}

	public void setKProject_Id(String project_Id) {
		KProject_Id = project_Id;
	}

	public String getKEmp_Id() {
		return KEmp_Id;
	}

	public void setKEmp_Id(String emp_Id) {
		KEmp_Id = emp_Id;
	}

	public String getTicket_Type() {
		return Ticket_Type;
	}

	public void setTicket_Type(String ticket_Type) {
		Ticket_Type = ticket_Type;
	}

	public String getTicket_Details() {
		return Ticket_Details;
	}

	public void setTicket_Details(String ticket_Details) {
		Ticket_Details = ticket_Details;
	}

	public String getTicket_Status() {
		return Ticket_Status;
	}

	public void setTicket_Status(String ticket_Status) {
	Ticket_Status = ticket_Status;
	}

	public Date getTicket_Update() {
		return Ticket_Update;
	}

	public void setTicket_Update(Date ticket_Update) {
		Ticket_Update = ticket_Update;
	}


	
	@Enumerated( EnumType.STRING)
	private  Ticket_Priority ticket_Priority;

	public Ticket_Priority getTicket_Priority() {
		return ticket_Priority;
	}

	public void setTicket_Priority(Ticket_Priority ticket_Priority) {
		this.ticket_Priority = ticket_Priority;
	}
	
	
	
	
	

}
