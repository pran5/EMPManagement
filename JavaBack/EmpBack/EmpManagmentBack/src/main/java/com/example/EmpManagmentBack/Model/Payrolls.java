
  package com.example.EmpManagmentBack.Model;
  
 import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id; import javax.persistence.Table;


  @Entity
  
  @Table(name="Payrolls") 
  public class Payrolls
  {
  
 
  
   
  private enum Payroll_Id{A,B,C,D}; 
  private int Payroll_Amount;
  
  public Payrolls() { super(); }
  
  public int getPayroll_Amount() {
	  return Payroll_Amount; 
	  }
  
  public void setPayroll_Amount(int payroll_Amount) {
	  Payroll_Amount =payroll_Amount; 
	  }
  
  @Id
  @Enumerated( EnumType.STRING)
	private  Payroll_Id payroll_id;

public Payroll_Id getPayroll_id() {
	return payroll_id;
}

public void setPayroll_id(Payroll_Id payroll_id) {
	this.payroll_id = payroll_id;
}

	


  
  
  
  
  
  
  }
 