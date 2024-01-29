import {Component, Input} from '@angular/core';
import {EmployeeDto} from "../dto/employee-dto";
import {EmployeeService} from "../service/employee.service";
import {SalaryDto} from "../dto/salary-dto";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.scss'
})
export class SalaryComponent {

  salaryList: Array<SalaryDto> = [];

  constructor(private service:EmployeeService) {
    // this.employeeList;
    // this.salaryList = service.getAllSalariesByEmployeeAndYear();
  }

  @Input()
  employee?:EmployeeDto;

  onSubmit (f: NgForm){
    const idNum = f.value.idNumber.trim();
    const year = f.value.year.trim();

    if(!idNum){
      return;
    }

    if(!year){
      return;
    }

    //public  idNumber:string, public contactNumber:string, public address:string, public activeStatus:boolean

    this.service.getAllSalariesByEmployeeAndYear(idNum, year);
  }


}


