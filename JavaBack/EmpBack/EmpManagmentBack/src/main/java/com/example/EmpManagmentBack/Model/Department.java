package com.example.EmpManagmentBack.Model;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="department")

public class Department {

	
	@Column(name="Dept_Id")
	@Id
	private String  Dept_Id;
	
	

	
	
	private String  Dept_Name;
	private int Dept_Total_Emp;
	
	public Department() {
		super();
	}

	public String getDept_Id() {
		return Dept_Id;
	}

	public void setDept_Id(String dept_Id) {
		Dept_Id = dept_Id;
	}

	public String getDept_Name() {
		return Dept_Name;
	}

	public void setDept_Name(String dept_Name) {
		Dept_Name = dept_Name;
	}

	public int getDept_Total_Emp() {
		return Dept_Total_Emp;
	}

	public void setDept_Total_Emp(int dept_Total_Emp) {
		Dept_Total_Emp = dept_Total_Emp;
	}
	
	
	
	
	
}
