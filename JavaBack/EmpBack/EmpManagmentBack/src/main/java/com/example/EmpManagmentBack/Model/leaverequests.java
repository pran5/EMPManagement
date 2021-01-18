package com.example.EmpManagmentBack.Model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


import javax.persistence.Table;

@Entity
@Table(name="leaverequests")
public class leaverequests {
	@Column(name=" LRequest_Id")
	@Id
	private String  LRequest_Id;
	
	private String  LRequest_Emp_Id, LRequest_Description;
	private int LRequest_M_Status,LRequest_A_Status;
	private Date LRequest_From,LRequest_To;
	
	public leaverequests() {
		super();
	}

	
	
	public String getLRequest_Id() {
		return LRequest_Id;
	}

	public void setLRequest_Id(String lRequest_Id) {
		LRequest_Id = lRequest_Id;
	}

	public String getLRequest_Emp_Id() {
		return LRequest_Emp_Id;
	}

	public void setLRequest_Emp_Id(String lRequest_Emp_Id) {
		LRequest_Emp_Id = lRequest_Emp_Id;
	}

	public String getLRequest_Description() {
		return LRequest_Description;
	}

	public void setLRequest_Description(String lRequest_Description) {
		LRequest_Description = lRequest_Description;
	}

	public int getLRequest_M_Status() {
		return LRequest_M_Status;
	}
	public void setLRequest_M_Status(int lRequest_M_Status) {
		LRequest_M_Status = lRequest_M_Status;
	}

	public int getLRequest_A_Status() {
		return LRequest_A_Status;
	}

	public void setLRequest_A_Status(int lRequest_A_Status) {
		LRequest_A_Status = lRequest_A_Status;
	}

	public Date getLRequest_From() {
		return LRequest_From;
	}

	public void setLRequest_From(Date lRequest_From) {
		LRequest_From = lRequest_From;
	}

	public Date getLRequest_To() {
		return LRequest_To;
	}

	public void setLRequest_To(Date lRequest_To) {
		LRequest_To = lRequest_To;
	}






}
