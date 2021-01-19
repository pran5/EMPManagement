package com.example.EmpManagmentBack;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employee")
public class Emp {
	
	@Column(name="Emp_Id")
	@Id
	private String Emp_Id;
	
	private String Emp_Firstname,Emp_Lastname,Emp_Email,Emp_Address,Emp_mobileno,Emp_City,Emp_State,Emp_Dept_Id,Emp_Designation,Emp_Qualification,Emp_Skills,Emp_Pass,Emp_Photo;
    
	private Date Emp_Dob;
	private enum Emp_Gender{M,F,T};
	private enum Emp_Payroll{A,B,C,D};
	private enum Emp_Access{A,M,E};
	
	
	
	
	public String getEmp_Id() {
		return Emp_Id;
	}




	public void setEmp_Id(String emp_Id) {
		Emp_Id = emp_Id;
	}




	public String getEmp_Firstname() {
		return Emp_Firstname;
	}




	public void setEmp_Firstname(String emp_Firstname) {
		Emp_Firstname = emp_Firstname;
	}




	public String getEmp_Lastname() {
		return Emp_Lastname;
	}




	public void setEmp_Lastname(String emp_Lastname) {
		Emp_Lastname = emp_Lastname;
	}




	public String getEmp_Email() {
		return Emp_Email;
	}




	public void setEmp_Email(String emp_Email) {
		Emp_Email = emp_Email;
	}




	public String getEmp_Address() {
		return Emp_Address;
	}




	public void setEmp_Address(String emp_Address) {
		Emp_Address = emp_Address;
	}




	public String getEmp_mobileno() {
		return Emp_mobileno;
	}




	public void setEmp_mobileno(String emp_mobileno) {
		Emp_mobileno = emp_mobileno;
	}




	public String getEmp_City() {
		return Emp_City;
	}




	public void setEmp_City(String emp_City) {
		Emp_City = emp_City;
	}




	public String getEmp_State() {
		return Emp_State;
	}




	public void setEmp_State(String emp_State) {
		Emp_State = emp_State;
	}




	public String getEmp_Dept_Id() {
		return Emp_Dept_Id;
	}




	public void setEmp_Dept_Id(String emp_Dept_Id) {
		Emp_Dept_Id = emp_Dept_Id;
	}




	public String getEmp_Designation() {
		return Emp_Designation;
	}




	public void setEmp_Designation(String emp_Designation) {
		Emp_Designation = emp_Designation;
	}




	public String getEmp_Qualification() {
		return Emp_Qualification;
	}




	public void setEmp_Qualification(String emp_Qualification) {
		Emp_Qualification = emp_Qualification;
	}




	public String getEmp_Skills() {
		return Emp_Skills;
	}




	public void setEmp_Skills(String emp_Skills) {
		Emp_Skills = emp_Skills;
	}




	public String getEmp_Pass() {
		return Emp_Pass;
	}




	public void setEmp_Pass(String emp_Pass) {
		Emp_Pass = emp_Pass;
	}




	public String getEmp_Photo() {
		return Emp_Photo;
	}




	public void setEmp_Photo(String emp_Photo) {
		Emp_Photo = emp_Photo;
	}




	public Date getEmp_Dob() {
		return Emp_Dob;
	}




	public void setEmp_Dob(Date emp_Dob) {
		Emp_Dob = emp_Dob;
	}
  
	



	public Emp(String emp_Id, String emp_Firstname, String emp_Lastname, String emp_Email, String emp_Address,
			String emp_mobileno, String emp_City, String emp_State, String emp_Dept_Id, String emp_Designation,
			String emp_Qualification, String emp_Skills, String emp_Pass, String emp_Photo, Date emp_Dob) {
		super();
		Emp_Id = emp_Id;
		Emp_Firstname = emp_Firstname;
		Emp_Lastname = emp_Lastname;
		Emp_Email = emp_Email;
		Emp_Address = emp_Address;
		Emp_mobileno = emp_mobileno;
		Emp_City = emp_City;
		Emp_State = emp_State;
		Emp_Dept_Id = emp_Dept_Id;
		Emp_Designation = emp_Designation;
		Emp_Qualification = emp_Qualification;
		Emp_Skills = emp_Skills;
		Emp_Pass = emp_Pass;
		Emp_Photo = emp_Photo;
		Emp_Dob = emp_Dob;
	}




	public Emp() {}
     
	
}
