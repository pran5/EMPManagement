package com.example.EmpManagmentBack;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Emp")
public class Emp {
	
	@Column(name="Emp_id")
	@Id
	private String Emp_id;
	
	private String Emp_name, Emp_email;
	
	public String getEmp_id() {
		return Emp_id;
	}

	public void setEmp_id(String emp_id) {
		Emp_id = emp_id;
	}

	public String getEmp_name() {
		return Emp_name;
	}

	public void setEmp_name(String emp_name) {
		Emp_name = emp_name;
	}

	public String getEmp_email() {
		return Emp_email;
	}

	public void setEmp_email(String emp_email) {
		Emp_email = emp_email;
	}

	public Emp(String emp_id, String emp_name, String emp_email) {
		
		Emp_id = emp_id;
		Emp_name = emp_name;
		Emp_email = emp_email;
	}
	
	public Emp() {
		
	}

	
	
	

}
