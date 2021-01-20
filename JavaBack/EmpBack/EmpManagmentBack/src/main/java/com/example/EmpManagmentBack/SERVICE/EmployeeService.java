package com.example.EmpManagmentBack.SERVICE;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EmpManagmentBack.Model.Employee;
import com.example.EmpManagmentBack.REPO.EmpRepo;



@Service
public class EmployeeService {


	@Autowired
	private EmpRepo employeeRepository;
	
	// fetching all employees
	public List<Employee> getAllEmployees(){
		List<Employee> emps = (List<Employee>)employeeRepository.findAll(); 
		return emps;
	}
	// fetching employee by id
		public Optional<Employee> getEmp(String id){
			return employeeRepository.findById(id);
		}
		
		
	 // inserting employee
		public void addEmployee(Employee e) {
			employeeRepository.save(e);
		}
		
	// updating employee by id
	public void updateEmployee(Employee emp, String id){
	if(id == emp.getEmp_Id()) {
	employeeRepository.save(emp);
		}
	}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//***********************************************************************************************************************************************//
		
		
		// deleting all employees
		public void deleteAllEmployees(){
			employeeRepository.deleteAll();
		}
		
		// deleting employee by id
		public void deleteEmployeeByID(String id){
			employeeRepository.deleteById(id);
		}
		
		//patching/updating employee by id
		public void patchEmployee(Employee emp, String id) {
			if(id == emp.getEmp_Id()) {
				employeeRepository.save(emp);
			}
		}
	
		
		
		
		
		
		
		
		
		
		
}
