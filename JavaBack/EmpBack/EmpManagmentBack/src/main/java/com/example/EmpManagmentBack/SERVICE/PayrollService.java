package com.example.EmpManagmentBack.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EmpManagmentBack.Model.Payrolls;
import com.example.EmpManagmentBack.REPO.PayrollRepo;



@Service
public class PayrollService {
	@Autowired
	private PayrollRepo payrollrepo;
	
	// fetching all employees
	public List<Payrolls> getAllPayrolls(){
		List<Payrolls> pay = (List<Payrolls>)payrollrepo.findAll(); 
		return pay;
	}
}
