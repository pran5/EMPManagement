package com.example.EmpManagmentBack.Model;

public class Tstatus {
	
	private int open;
	private int close;
	public int getOpen() {
		return open;
	}
	/**
	 * @param open
	 * @param close
	 */
	public Tstatus(int open, int close) {
		super();
		this.open = open;
		this.close = close;
	}
	
	public Tstatus(){
		
	}
	public void setOpen(int open) {
		this.open = open;
	}
	public int getClose() {
		return close;
	}
	public void setClose(int close) {
		this.close = close;
	}
	

}
