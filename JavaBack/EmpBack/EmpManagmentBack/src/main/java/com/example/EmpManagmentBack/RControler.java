package com.example.EmpManagmentBack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RControler {

private EmpRepo  e;
private ManagerRepo  m;
	@Autowired	
	public void setR(EmpRepo e) {
		
		System.out.println("hey wiring has happened");
		this.e = e;
	}
	
	@Autowired	
	public void setR(ManagerRepo m) {
		
		System.out.println("hey manager wiring has happened");
		this.m = m;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	
	@GetMapping("/")
	public List<Emp> getMessage(@RequestParam("x") int x) {
		
		return e.findAll();
	}
	
	@GetMapping("/12")
	public List<Manager> getMessag(@RequestParam("y") int x) {
		
		return m.findAll();
	}
	
//	@PostMapping("/dml")
//	public String f3(@RequestBody() Emp x)
//	{
//		
//		return "hello";
//	}
}
