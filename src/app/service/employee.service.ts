import { Injectable } from '@angular/core';
import {EmployeeDto} from '../dto/employee-dto'
import {SalaryDto} from "../dto/salary-dto";

@Injectable()
export class EmployeeService {

  readonly API_BASE_URL=`http://localhost:8080/api/v1/employees`;

  private employeeList: Array<EmployeeDto> = [];

  private salaryList: Array<SalaryDto> = [];

  private employeeListSorted: Array<EmployeeDto> = [];

  addNewEmployee(employee: EmployeeDto) {
    fetch(`${this.API_BASE_URL}`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(employee)
    }).then(res => {
      if(res.ok){
        res.json().then(employee => {
          this.employeeList.push(employee)
          alert("Employee added successfully")
        })
      } else {
        alert("Failed to add the employee");
      }

    }).catch(err => {
      alert("Something went wrong. Try again later");
    })
  }

  updateEmployee(employee: EmployeeDto, index:number) {
    this.employeeList.splice(index, 1);
    // this.employeeList[index] = employee;
  }

  deleteEmployee(employee:EmployeeDto){
    // const index = this.employeeList.indexOf(employee);
    // this.employeeList.splice(employee.idNumber, 1);
  }

  getAllEmployees(){
    this.employeeList = [];
    fetch(`${(this.API_BASE_URL)}`)
      .then(res => {
        if(res.ok){
          res.json().then(data => data.forEach((employee:EmployeeDto) => this.employeeList.push(employee)));

        }else{
          alert("Failed to load employee")
        }
      }).catch(err => {
      alert("Something went wrong please try again");
    });
    console.log(this.employeeList)
    return this.employeeList;
  }

  getAllSalariesByEmployeeAndYear(idNum: string, year: string){
    this.salaryList = [];
    fetch(`${(this.API_BASE_URL)}?query=${idNum}n${year}`)
      .then(res => {
        if(res.ok){
          res.json().then(data => data.forEach((salary:SalaryDto) => this.salaryList.push(salary)));

        }else{
          alert("Failed to load employee")
        }
      }).catch(err => {
      alert("Something went wrong please try again");
    });
    console.log(this.salaryList)
    return this.salaryList;
  }




}
