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
				
		
		
		
// displaying list of all pushnotification
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
		
	
// displaying Manager by id
	  	@GetMapping("/manager/{id}_A")
		public Optional<Manager> getManager(@RequestParam String id){
		return managerService.getM_Id(id);
				}		
		
 // displaying Team by id
	 	  	@GetMapping("/Team/{id}_A")
	 		public Optional<Team> getTeam_Id(@RequestParam int id){
	 		return teamService.getTeam_Id(id);
	 				}		
	 		
	 	  	
	 	  	
// displaying ticket by id
			@GetMapping("/ticket/{id}_A")
			public Optional<Ticket> getTicket_No(@RequestParam String id){
			return ticketService.getTicket_No(id);
					}
	 	  	
// displaying pushnotification by id
	 	  	@GetMapping("/pushnotification/{id}_A")
	 		public Optional<Pushnotification> getPN_No(@RequestParam String id){
	 		return pushnotificationService.getPN_No(id);
	 				}	 	  	
	 	  	
// displaying Resourcerequest by id
	 	  	@GetMapping("/resourcerequest/{id}_A")
	 		public Optional<Resourcerequests> getRR_Id(@RequestParam String id){
	 		return resourcerequestService.getRR_Id(id);
	 				}	 	 	  	
	 	  	
	 	  	
// displaying Project by id
	 		 	  	@GetMapping("/project/{id}_A")
	 		 		public Optional<Project> getProject_Id(@RequestParam String id){
	 		 		return projectService.getProject_Id(id);
	 		 				}	 	 	  	
	 		 	  		 	  	
	 	  	
// displaying Leaverequests by id
	 		 	  	@GetMapping("/leaverequests/{id}_A")
	 		 		public Optional<Leaverequests> getLRequest_Id(@RequestParam String id){
	 		 		return leaverequests.getLRequest_Id(id);
	 		 				}	 
	 	  	
	 	  	
	 	  	
	 	  	
//******************************************************************************************************************//	 	  	
	 	  	
	 	  	
	 	  	
	 	  	

	 			  	
// inserting employee
		 		 	  		@PostMapping("/employees_B")
		 		 	  		public void addEmployees(@RequestBody Employee employee){
		 		 	  			employeeService.addEmployee(employee);
		 		 	  		}
		 		 	 
		
		
			 			  	
// inserting manager
			@PostMapping("/manager_B")
		 	public void addManager(@RequestBody Manager manager){
				managerService.addManager(manager);
		 		 		}
		 		 	  			 		 	 		
		
		
	 		 
//  inserting Team
	 		 	  		@PostMapping("/team_B")
	 		 	  		public void addTeam(@RequestBody Team team){
	 		 	  		teamService.addTeam(team);
	 		 	  		}
	 		 	  
	 		 	  		
// inserting ticket
	 		 	  		@PostMapping("/ticket_B")
	 		 	  		public void addTicket(@RequestBody Ticket ticket){
	 		 	  		ticketService.addTicket(ticket);
	 		 	  		}
	 		 	  	 	  		
	 		 	  		
 // inserting pushnotification
	 		 		 	  		@PostMapping("/pushnotification_B")
	 		 		 	  		public void addPushnotification(@RequestBody Pushnotification pushnotification){
	 		 		 	  		pushnotificationService.addPushnotification(pushnotification);
	 		 		 	  		}
	 		 		 	   		 
	 		 		 	  		
// inserting Resourcerequest
	 		 		 	  		@PostMapping("/resourcerequest_B")
	 		 		 	  		public void addResourcerequests(@RequestBody Resourcerequests resourcerequests){
	 		 		 	  			resourcerequestService.addResourcerequests(resourcerequests);
	 		 		 	  		}
	 		 		 	  		 	  		
	 		 	  		
	 		 	  		
// inserting Project
	 		 		 	  		@PostMapping("/project_B")
	 		 		 	  		public void addProject(@RequestBody Project project){
	 		 		 	  			projectService.addProject(project);
	 		 		 	  		}
	 		 		 	  	 	  		
	 		 	  		
	 		 		 	   	
// inserting Leaverequests
	 		 	 		 	  		@PostMapping("/leaverequests_B")
	 		 	 		 	  		public void addLeaverequests(@RequestBody Leaverequests leavereq){
	 		 	 		 	  			leaverequests.addLeaverequests(leavereq);
	 		 	 		 	  		}
	 		 	 		 	  
	 		 	 		 	  				
//************************************************************************************************************************************************************// 		 	  		
	 		 	  		
	 		 	  		

//updating employee by id
	 		@PostMapping("/employees/{id}_C")
	 		public void updateEmployee(@RequestBody Employee e, @RequestBody String id){
			employeeService.updateEmployee(e, id);
		} 	  		
	 		 	  		
	 		
//updating manager by id
	         @PostMapping("/manager/{id}_C")
	 		 public void updateManager(@RequestBody Manager e, @RequestBody String id){
	 		 managerService.updateManager(e, id);
	 		 			} 		 		
	 		
//updating Team by id
	 		@PostMapping("/Team/{id}_C")
	 		public void updateTeam(@RequestBody Team e, @RequestBody int id){
	 	 	teamService.updateTeam(e, id);
	 	 			 			}  		
	 	
//updating ticket by id
			@PostMapping("/ticket/{id}_C")
	  		public void updateTicket(@RequestBody Ticket e, @RequestBody String id){
			ticketService.updateTicket(e, id);
	 			} 	  	 		         
	         
 		 	
//updating pushnotification by id
           @PostMapping("/pushnotification/{id}_C")
           public void updatePushnotification(@RequestBody Pushnotification e, @RequestBody String id){
           pushnotificationService.updatePushnotification(e, id);
 			} 	 		         
	         
	         
//updating Resourcerequest by id
      	 @PostMapping("/resourcerequest/{id}_C")
      	 public void updateResourcerequests(@RequestBody Resourcerequests e, @RequestBody String id){
      	 resourcerequestService.updateResourcerequests(e, id);
      	 			} 	 	         
	         
	         
//updating Project by id
    	 @PostMapping("/project/{id}_C")
    	 public void updateProject(@RequestBody Project e, @RequestBody String id){
    	 projectService.updateProject(e, id);
    	 			} 	         
	         

	 	
//updating Leaverequests by id
	 @PostMapping("/leaverequests/{id}_C")
	 public void updateLeaverequests(@RequestBody Leaverequests e, @RequestBody String id){
	 leaverequests.updateLeaverequests(e, id);
	 			} 	  	 		
	 			 		 		 		 		 	  		
	 			 		 		 		 		 	  			 	
	 		 	  	
	 		 	  		
	 		 	  	
	 		 	 
	 		 	  		
	 		 	 	 			 		
		
//*****************************************************************************************************************************//		
		
		
		
		
		
		
		
		
		
		
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

		
		
		
		
		
		
	/*	// extra
		// updating/ patching employee by id
		@PostMapping("employees/{id}_F")
		public void patchEmployeeByID(@RequestBody Employee e, @RequestBody String id) {
			employeeService.patchEmployee(e, id);
		}
	*/

	
}