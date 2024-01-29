import {Component, inject, Input} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {EmployeeDto} from "../dto/employee-dto";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  employeeList: Array<EmployeeDto>;

  constructor(private service:EmployeeService) {
    // this.employeeList;
    this.employeeList = service.getAllEmployees();
  }

  @Input()
  employee?:EmployeeDto;

  onEmployeeDelete(employee:EmployeeDto){
    this.service.deleteEmployee(employee);
  }

  // onEmployeeUpdate(employee:EmployeeDto, index:number){
  //   this.service.updateEmployee(employee, index);
  // }

  //(click)="onEmployeeUpdate(employee!, employee!.id)"


}
