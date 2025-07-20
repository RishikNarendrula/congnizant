package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

class Loan {
    private String number;
    private String type;
    private double loan;
    private int emi;
    private int tenure;

    public Loan(String number, String type, double loan, int emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loan = loan;
        this.emi = emi;
        this.tenure = tenure;
    }
    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public double getLoan() { return loan; }
    public void setLoan(double loan) { this.loan = loan; }
    public int getEmi() { return emi; }
    public void setEmi(int emi) { this.emi = emi; }
    public int getTenure() { return tenure; }
    public void setTenure(int tenure) { this.tenure = tenure; }
}


@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        return new Loan("H00987987972524", "car", 400000, 3500, 18);
    }
}
