package com.example.EmpManagmentBack.Model;

import java.util.List;

public class test {
	
	private List<Project> pp;
	private List<List<Team>> tt;
	public List<Project> getPp() {
		return pp;
	}
	public void setPp(List<Project> pp) {
		this.pp = pp;
	}
	public List<List<Team>> getTt() {
		return tt;
	}
	public void setTt(List<List<Team>> tt) {
		this.tt = tt;
	}
	public test(List<Project> pp, List<List<Team>> tt) {
		
		this.pp = pp;
		this.tt = tt;
	}
	
	public test() {
		
	}
	

}
