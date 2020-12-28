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
	
	@Autowired	
	public void setR(EmpRepo e) {
		
		System.out.println("hey wiring has happened");
		this.e = e;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	
	@GetMapping("/")
	public List<Emp> getMessage(@RequestParam("x") int x) {
		
		return e.findAll();
	}
	
//	@PostMapping("/dml")
//	public String f3(@RequestBody() Emp x)
//	{
//		
//		return "hello";
//	}
}
