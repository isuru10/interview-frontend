import {Component, inject} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {EmployeeDto} from "../dto/employee-dto";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private service: EmployeeService) {

  }

  // service:EmployeeService = inject(EmployeeService);

  onSubmit (idNumber: HTMLInputElement, phoneElm: HTMLInputElement, addressElm: HTMLInputElement){
    const idNum = idNumber.value.trim();
    const contact = phoneElm.value.trim();
    const address = addressElm.value.trim();

    if(!idNum){
      idNumber.value = "";
      idNumber.focus();
      idNumber.select();
      return;
    }

    if(!contact){
      phoneElm.value = "";
      phoneElm.focus();
      phoneElm.select();
      return;
    }

    if(!address){
      addressElm.value = "";
      addressElm.focus();
      addressElm.select();
      return;
    }

    //public  idNumber:string, public contactNumber:string, public address:string, public activeStatus:boolean

    this.service.addNewEmployee(new EmployeeDto(idNum, contact, address, true ));
    idNumber.value = "";
    phoneElm.value = "";
    addressElm.value = "";

    idNumber.focus();
    idNumber.select();
  }


}
