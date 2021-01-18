package com.example.EmpManagmentBack.Model;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="manager")
public class Manager {
	@Column(name=" M_Id")
	@Id
	private String  M_Id;
	
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "M_Emp_Id", referencedColumnName = "Emp_Id",insertable = false, updatable = false)
    private Employee employee;  
	
	
	
	
	
	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	
	
	
	

	private String  M_Emp_Id, M_Project_Id;
	
	public Manager() {
		super();
	}

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
	
	
	
	
	
	
}
