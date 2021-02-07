package com.example.EmpManagmentBack.Model;

import java.util.List;

public class test {
	
	private List<Project> pp;
	private List<List<Team>> tt;
	private List<List<Integer>> pc;
	private List<List<Tstatus>> tc;
	public List<List<Tstatus>> getTc() {
		return tc;
	}
	public void setTc(List<List<Tstatus>> tc) {
		this.tc = tc;
	}
	public List<List<Integer>> getPc() {
		return pc;
	}
	public void setPc(List<List<Integer>> pc) {
		this.pc = pc;
	}
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
