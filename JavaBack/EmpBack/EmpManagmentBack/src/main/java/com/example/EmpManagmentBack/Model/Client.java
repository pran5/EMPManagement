package com.example.EmpManagmentBack.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="client")
public class Client {
	
	@Column(name=" Client_Id")
	@Id
	private String  Client_Id;
	
	
	
	private String Client_Email,client_mobile_no,Client_Name,Client_PAN;



	public Client() {
		super();
	}



	public String getClient_Id() {
		return Client_Id;
	}



	public void setClient_Id(String client_Id) {
		Client_Id = client_Id;
	}



	public String getClient_Email() {
		return Client_Email;
	}



	public void setClient_Email(String client_Email) {
		Client_Email = client_Email;
	}



	public String getClient_MobileNo() {
		return client_mobile_no;
	}



	public void setClient_MobileNo(String client_MobileNo) {
		client_mobile_no = client_MobileNo;
	}



	public String getClient_Name() {
		return Client_Name;
	}



	public void setClient_Name(String client_Name) {
		Client_Name = client_Name;
	}



	public String getClient_PAN() {
		return Client_PAN;
	}



	public void setClient_PAN(String client_PAN) {
		Client_PAN = client_PAN;
	}
	
	
	
	
	
	
	
	

}
