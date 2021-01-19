package com.example.EmpManagmentBack;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.EmpManagmentBack.Model.Employee;
import com.example.EmpManagmentBack.Model.Leaverequests;
import com.example.EmpManagmentBack.Model.Manager;
import com.example.EmpManagmentBack.Model.Project;
import com.example.EmpManagmentBack.Model.Pushnotification;
import com.example.EmpManagmentBack.Model.Resourcerequests;
import com.example.EmpManagmentBack.Model.Team;
import com.example.EmpManagmentBack.Model.Ticket;
import com.example.EmpManagmentBack.SERVICE.EmployeeService;
import com.example.EmpManagmentBack.SERVICE.LeavereqService;
import com.example.EmpManagmentBack.SERVICE.ManagerService;
import com.example.EmpManagmentBack.SERVICE.ProjectService;
import com.example.EmpManagmentBack.SERVICE.PushnotificationService;
import com.example.EmpManagmentBack.SERVICE.ResourcerequestService;
import com.example.EmpManagmentBack.SERVICE.TeamService;
import com.example.EmpManagmentBack.SERVICE.TicketService;



@RestController
public class RControler {

	
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private ManagerService managerService;
	
	@Autowired
	private TeamService teamService;
	
	@Autowired
	private TicketService ticketService;
	
	
	@Autowired
	private PushnotificationService pushnotificationService;
	
	@Autowired
	private ResourcerequestService resourcerequestService;
	
	@Autowired
	private ProjectService projectService;
	
	
	@Autowired
	private LeavereqService leaverequests;
	
	
	
	
	
	
	
	
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	
	
	
	
//*********************************************************************************************************************************************//	
	
	
	
// displaying list of all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeService.getAllEmployees();
	}
	
	
// displaying list of all Manager
		@GetMapping("/manager")
		public List<Manager> getAllManager(){
			return managerService.getAllManager();
		}
		
		
 // displaying list of all Team
				@GetMapping("/Team")
				public List<Team> getAllTeam(){
					return teamService.getAllTeam();
				}
		
// displaying list of all ticket
		@GetMapping("/ticket")
		public List<Ticket> getAllTicket(){
		return ticketService.getAllTicket();
				}			
				
		
		
		
// displaying list of all ticket
				@GetMapping("/pushnotification")
				public List<Pushnotification> getAllPushnotification(){
				return pushnotificationService.getAllPushnotification();
						}		 				
				
				
// displaying list of all Resourcerequest
				@GetMapping("/resourcereq")
				public List<Resourcerequests> getAllResourcerequests(){
				return resourcerequestService.getAllResourcerequests();
						}						
				
// displaying list of all Project
				@GetMapping("/project")
				public List<Project> getAllProject(){
				return projectService.getAllProject();
						}								
				
// displaying list of all Leaverequests
				@GetMapping("/leaverequests")
				public List<Leaverequests> getAllLeaverequests(){
				return leaverequests.getAllLeaverequests();
						}									
				
				
				
//************************************************************************************************************************************************************************//		
				
				
				
							
				
// displaying employee by id
		@GetMapping("/employees/{id}_A")
		public Optional<Employee> getEmployee(@RequestParam String id){
		return employeeService.getEmp(id);
		}
		
	
// displaying employee by id
	  	@GetMapping("/manager/{id}_A")
		public Optional<Manager> getManager(@RequestParam String id){
		return managerService.getM_Id(id);
				}		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		// inserting employee
		@PostMapping("/employees_B")
		public void addEmployees(@RequestBody Employee employee){
			employeeService.addEmployee(employee);
		}

		//updating employee by id
		@PostMapping("/employees/{id}_C")
		public void updateEmployee(@RequestBody Employee e, @RequestBody String id){
			employeeService.updateEmployee(e, id);
		}
		
		// deleting all employees
		@PostMapping("/employees_D")
		public void deleteAllEmployees(){
			employeeService.deleteAllEmployees();
		}

		// deleting employee by id
		@PostMapping("employees/{id}_E")
		public void deleteEmployeeByID(@RequestBody Employee e, @RequestBody String id){
			employeeService.deleteEmployeeByID(id);
		}

		// updating/ patching employee by id
		@PostMapping("employees/{id}_F")
		public void patchEmployeeByID(@RequestBody Employee e, @RequestBody String id) {
			employeeService.patchEmployee(e, id);
		}
	
	
	


	
	
	
	
	
	
	
}
