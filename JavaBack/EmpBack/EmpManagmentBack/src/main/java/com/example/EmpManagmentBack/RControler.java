package com.example.EmpManagmentBack;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.EmpManagmentBack.Model.Client;
import com.example.EmpManagmentBack.Model.Employee;
import com.example.EmpManagmentBack.Model.Leaverequests;
import com.example.EmpManagmentBack.Model.Manager;
import com.example.EmpManagmentBack.Model.Project;
import com.example.EmpManagmentBack.Model.Pushnotification;
import com.example.EmpManagmentBack.Model.Resourcerequests;
import com.example.EmpManagmentBack.Model.Team;
import com.example.EmpManagmentBack.Model.Ticket;
import com.example.EmpManagmentBack.Model.Tstatus;
import com.example.EmpManagmentBack.Model.test;
import com.example.EmpManagmentBack.SERVICE.ClientService;
import com.example.EmpManagmentBack.SERVICE.DepartmentServices;
import com.example.EmpManagmentBack.SERVICE.EmployeeService;
import com.example.EmpManagmentBack.SERVICE.LeavereqService;
import com.example.EmpManagmentBack.SERVICE.ManagerService;
import com.example.EmpManagmentBack.SERVICE.ProjectService;
import com.example.EmpManagmentBack.SERVICE.PushnotificationService;
import com.example.EmpManagmentBack.SERVICE.ResourcerequestService;
import com.example.EmpManagmentBack.SERVICE.TeamService;
import com.example.EmpManagmentBack.SERVICE.TicketService;


@CrossOrigin(origins = "http://localhost:4200")
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
	

	@Autowired
	private DepartmentServices ddepartmentServices;
	
	
	@Autowired
	private ClientService clientService;
	
	
	
	
	
	
	
	
	
	
	
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
				
// displaying list of all Client
				@GetMapping("/client")
				public List<Client> getAllClient(){
				return clientService.getAllClient();
						}		
				
				
				
		//$$$$$$$$$$$$$$		by Nikhil project details plus team details
				
		@GetMapping("/projectexpnddata")
				public test getAllProjectt(){
			test testt = new test();
			List<Team> t2;
			List<Integer> l1;
			List<List<Team>> t = new ArrayList<List<Team>>() ;
			List<List<Integer>> l2 = new ArrayList<List<Integer>>();
			List<List<Tstatus>> a2 = new ArrayList<List<Tstatus>>();
				List<Project> p = projectService.getAllProject();
				 System.out.println("hello----------------------------------");
				 for(int i = 0; i < p.size(); i++) {
			            System.out.println(p.get(i).getProject_M_Id());
			            System.out.println("hello----------------------------------");
			            t2=  teamService.getTeam_MId(p.get(i).getProject_M_Id());
			            l1 = new ArrayList<Integer>();
			            List<Tstatus> a1 = new ArrayList<Tstatus>();
			            for(int j = 0 ; j < t2.size(); j++){
			            	Tstatus a = new Tstatus();
			            	int pcount = teamService.getcountbyid(t2.get(j).getT_Emp_Id());
			            	a.setOpen(ticketService.getopenbyEid(t2.get(j).getT_Emp_Id()));
			            	a.setClose(ticketService.getopenbyEid(t2.get(j).getT_Emp_Id()));
			            	l1.add(pcount);
			            	a1.add(a);
			            }
			            t.add(t2);
			            l2.add(l1);
			            a2.add(a1);
			          
			        }
				 testt.setPp(p);
				 testt.setTt(t);
				 testt.setPc(l2);
				 testt.setTc(a2);
				 
				
				return testt;
						}	
		
		
		
		@GetMapping("/projectddataByEmp")
		public test getAllProjectByEmp(@RequestParam String id){
			test testt = new test();
			List<Team> t2;
			List<Team> t3;
			List<List<Team>> t = new ArrayList<List<Team>>() ;
			List<Project> p = new ArrayList<Project>();
			Project Pro ;
			 
			t2 = teamService.getAllTeamByEid(id);
			for(int i = 0; i < t2.size(); i++){
				t3 = teamService.getTeam_MId(t2.get(i).getTeam_M_Id());
				t.add(t3);
				System.out.println(t2.get(i).getTeam_M_Id()+"=======================");
			 Pro = projectService.getByMAnagerID(t2.get(i).getTeam_M_Id());
			 p.add(Pro);
			}
			testt.setPp(p);
			 testt.setTt(t);
			 
			 return testt;
			
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
	 // displaying all Manager by null project id	  	
	  	@GetMapping("/manager/{id}_k")
		public List<Manager> getalManager(){
		return managerService.getM_Idnull();
				}
		
 // displaying Team by id
	 	  	@GetMapping("/Team/{id}_A")
	 		public Optional<Team> getTeam_Id(@RequestParam int id){
	 		return teamService.getTeam_Id(id);
	 				}	
	 	  	
// display count by employee id			
			
	 				@GetMapping("/teamempid") 	
	 				public Long getT_Emp_Id(@RequestParam String id)
	 				{
	 					return teamService.getT_Emp_Id(id);
	 				}
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
	 	  	
//$$$$$$$$$$$$$$$$$$ 	by Nikhil  	team by manger id
	 	  	@GetMapping("/Team/{id}_B")
	 		public List<Team> getTeam_MId(@RequestParam String id){
	 		return teamService.getTeam_MId(id); 
	 				}	
	 		
	 	  	
// team by Emp id
	 	  	@GetMapping("/Team/byEmpid")
	 		public List<Team> getTeamByEid(@RequestParam String id){
	 		return teamService.getAllTeamByEid(id); 
	 				}
	 	  	
	 	  	
// displaying ticket by id
			@GetMapping("/ticket/{id}_A")
			public Optional<Ticket> getTicket_No(@RequestParam String id){
			return ticketService.getTicket_No(id);
	}
			
//$$$$$$$$$$$$$$$$$$ 	  	
	 	  	@GetMapping("/ticket/{id}_B")
	 		public List<Ticket> getEmp_Id(@RequestParam String id){
	 		return ticketService.getEmp_Id(id); 
	 				}	

	 	  	
//get all ticket by manger id
	 	  	@GetMapping("/ticket/{id}_nc")
	 		public List<Ticket> getByM_Id(@RequestParam String id){
	 	  		Manager m = managerService.getByEid(id);
	 	  		Project p  = projectService.getByMAnagerID(m.getM_Id());
	 		return ticketService.getByProjectId(p.getProject_Id()); 
	 				}
	 	  	
	 	  	
// get all team member of manager by manager empid
	 	  	@GetMapping("/team/ofmanager")
	 	  	public List<Team> getByMeid(@RequestParam String id){
	 	  		Manager m = managerService.getByEid(id);
	 	  		return teamService.getTeam_MId(m.getM_Id());
	 	  	}

//get employee from team by manager empid and employee empid
	 	  	
	 	  	@GetMapping("/team/Bymangeridnempid")
	 	  	public Team getEmpByMeid(@RequestParam String meid,@RequestParam String eeid){
	 	  		Manager m = managerService.getByEid(meid);
	 	  		return teamService.getTeam_MId_EId(m.getM_Id(),eeid);
	 	  	}
	 	  	
// get employee leave request under one manager
	 	  	
	 	  	@GetMapping("/allLeave/Bymangerid")
	 	  	public List<List<Leaverequests>> getAllLeaveByMid(@RequestParam String meid){
	 	  		Manager m = managerService.getByEid(meid);
	 	  		List<Team> t =  teamService.getTeam_MId(m.getM_Id());
	 	  		List<Leaverequests> l1 = new ArrayList<Leaverequests>();
	 	  		List<List<Leaverequests>> l2 =  new ArrayList<List<Leaverequests>>()  ;
	 	  		for(int i = 0; i < t.size(); i++){
	 	  			l1 = leaverequests.getLeaveByEmpId(t.get(i).getT_Emp_Id());
	 	  			l2.add(l1);
	 	  		}
	 	  		return l2;
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
	 		 	  	
// display Leave Request By Employee id
	 		 	  	
	 		 	  @GetMapping("/leaverequests/getleave")
	 		 		public List<Leaverequests> getLreqByEmpId(@RequestParam String id){
	 		 		return leaverequests.getLeaveByEmpId(id);
	 		 				}	
// display Resource Request By Employee id
	 		 	  
	 		 	  @GetMapping("/Resource/ByEid")
	 		 	  public List<Resourcerequests> getReqByID(@RequestParam String id){
	 		 		  return resourcerequestService.getResourceByEmpId(id);
	 		 	  }
	 	  	
	 	  	
	 	  	
//******************************************************************************************************************//	 	  	
	 	  	
	 	  	
	 	  	
	 	  	

	 			  	
// inserting employee
		 		 	  		@PostMapping("/employees_B")
		 		 	  		public void addEmployees(@RequestBody Employee employee){
		 		 	  			
		 		 	  		System.out.println("Jai shree Krishna" + employee.getEmp_Id());
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
	 		 	 		 	  
//inserting Client
 		 	 		 	  		@PostMapping("/client_B")
 		 	 		 	  		public void addClient(@RequestBody Client sli){
 		 	 		 	  			System.out.println(sli.getClient_Id());
 		 	 		 	  		clientService.addClient(sli);
 		 	 		 	  		}
 		 	 		 	    				
//************************************************************************************************************************************************************// 		 	  		
	 		 	  		
	 		 	  	
	 		 	 		 	  		
	 		 	 		 	  		

//updating employee by id
	 		@PutMapping("/employees_C")
	 		public Employee updateEmployee(@RequestBody Employee e){
			employeeService.updateEmployee(e);
			return e;
		} 	  		
	 		 	  		
	 		
//updating manager by id
	 		@PutMapping("/manager_C")
	 		 public Manager  updateManager( @RequestBody Manager e){
	 		 managerService.updateManager(e);
	 		return e;
	 		 			} 		 		
	 		 		
//updating Team by id
	 		@PutMapping("/Team_C")
	 		public Team updateTeam( @RequestBody Team id){
	 	 	teamService.updateTeam(id);
	 	 	return id;
	 	 			 			}  		
	 	
 		
//updating ticket by id
	 		@PutMapping("/ticket_C")
	  		public Ticket updateTicket( @RequestBody Ticket t){
			ticketService.updateTicket(t);
			return t;
	 			} 	  	 		         
	         
 		 	

//updating pushnotification by id
	 		@PutMapping("/pushnotification_C")
           public Pushnotification updatePushnotification( @RequestBody Pushnotification pu){
           pushnotificationService.updatePushnotification(pu);
           return pu;
 			} 	 		         
	
                  
//updating Resourcerequest by id
	 		@PutMapping("/resourcerequest_C")
      	 public Resourcerequests updateResourcerequests( @RequestBody Resourcerequests rq){
      	 resourcerequestService.updateResourcerequests(rq);
      	 return rq;
      	 			} 	 	         
	  
//updating Project by id
	 		@PutMapping("/project_C")
    	 public Project updateProject(@RequestBody Project pr){
    	 projectService.updateProject(pr);
    	 return pr;
    	 			} 	         
	        
//updating Leaverequests by id
	 		@PutMapping("/leaverequests_C")
	 public Leaverequests updateLeaverequests( @RequestBody Leaverequests leav){
	 leaverequests.updateLeaverequests(leav);
	 return leav;
	 			} 	  	 		
	 			 		 		 		 		 	  		
	 			 		 		 		 		 	  			 	
	 		 	  	
	
	
//*****************************************************************************************************************************//		

// working delete with client
	 		@DeleteMapping("/clientaaaaa/{id}")
	 		public String deleteClientByID(@PathVariable String id){
	 			clientService.deleteClient(id);
				return "okay gud";}
				
			
	 		
	 		
	 		
	 		
	 		
//Delete by id for employee	
	 		
	 		@DeleteMapping("/employees_d/{id}")
	 		public String deleteEmployeeByID(@PathVariable String id){
	 			employeeService.deleteEmployeeByID(id);
				return "okay gud";}
				
	 		
	 		
	 		
	 		
	 		
	 /*
	 		@DeleteMapping("/delete/{id}")
	 		public ResponseEntity<?> deleteEmployeeByID(@PathVariable String id){
	 			String status = employeeService.deleteEmployeeByID(id);
	 			if(status==null)
	 			{
	 				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	 			}
	 			return new ResponseEntity<Void>(HttpStatus.OK);
	 			
	 		}*/
	 		
	 		
	 		
	 		
	 		
	 		
	/*// deleting employee by id
    		@DeleteMapping("Department/{id}_D")
    		public void deleteDepartmentByID( @PathVariable String id){
    			ddepartmentServices.deleteDepartmentByID(id);
			
					
    		}
 		
 		
 		
 		*/
 		

 		
 		
		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
   /* 		
		
		// deleting all employees
	 		@DeleteMapping("/pushnotification_D")
		public void deleteAllPushnotification(){
			pushnotificationService.deleteAllPushnotification();
		}


		
	// updating/ patching employee by id
		@PatchMapping("employees/{id}_F")
		public void patchEmployeeByID(@RequestBody  Employee e, @PathVariable String id) {
			employeeService.patchEmployee(e, id);
		}*/
	
	/*	@Autowired
		private EmpRepo employeeRepository;
	
		 @RequestMapping(value = "/employeeDelete", method = RequestMethod.GET )
		    public String delete(@RequestParam("id") String id) {
			 employeeRepository.deleteById(id);
		        return "JAI SHREE ";
		    }


*/
	
	
	
		
		
		
		
	
	
}

