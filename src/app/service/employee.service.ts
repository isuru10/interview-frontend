import { Injectable } from '@angular/core';
import {EmployeeReqDto} from '../dto/req/employeeReq-dto'
import {EmployeeResDto} from "../dto/res/employeeRes-dto";

@Injectable()
export class EmployeeService {

  readonly API_BASE_URL=`http://localhost:8080/api/v1/employees`;
  //{{API_URL}}/employees?query=

  private employeeList: Array<EmployeeResDto> = [

  ];

  private employeeListPaginated: Array<EmployeeResDto> = [

  ];

  private employeeListSorted: Array<EmployeeResDto> = [

  ];

  addNewEmployee(employee: EmployeeReqDto) {
    fetch(`${this.API_BASE_URL}`, {
      method : "POST",
      headers : {
        "Content-Type" : "multipart/form-data"
      },
      body : JSON.stringify(employee)
    }).then(res => {
      if(res.ok){
        console.log(employee.email)
        res.json().then(employee => {
          this.employeeList.push(employee)
        })
      } else {
        alert("Faild to add the employee");
      }

    }).catch(err => {
      alert("Something went worng. Try again later");
    })
  }

  updateEmployee(employee: EmployeeReqDto, index:number) {
    this.employeeList.splice(index, 1);
    // this.employeeList[index] = employee;
  }

  deleteEmployee(index:number){
    // const index = this.employeeList.indexOf(employee);
    this.employeeList.splice(index, 1);
  }

  getAllEmployees(){
    fetch(`${(this.API_BASE_URL)}?query= `)
      .then(res => {
        if(res.ok){
          res.json().then(data => data.forEach((employee:EmployeeResDto) => this.employeeList.push(employee)));

        }else{
          alert("Failed to load employee")
        }
      }).catch(err => {
      alert("Something went wrong please try again");
    });
    console.log(this.employeeList)
    return this.employeeList;
  }

  getAllSortedEmployees(field:string){
    return this.employeeListSorted;
  }

  getAllPaginatedEmployees(page:number, sort:number){
    return this.employeeListPaginated;
  }

}
