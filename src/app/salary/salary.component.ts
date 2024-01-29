import {Component, Input} from '@angular/core';
import {EmployeeDto} from "../dto/employee-dto";
import {EmployeeService} from "../service/employee.service";
import {SalaryDto} from "../dto/salary-dto";

@Component({
  selector: 'app-cart',
  template: `
    <section id="book-details" class="flex items-center justify-between bg-gray-900 dark:bg-white h-[calc(50vh)]">

      <div class="flex-row p-5">
        <form (ngSubmit)="onSubmit(idNumber, phoneElm, addressElm)" #frmNgForm="ngForm"
              class="flex-col max-w-md mx-auto m-5">
          <div class="relative z-0 w-full mb-5 group">
            <input ngModel type="text"
                   pattern="^(?:19|20)?\\d{2}(?:[0-35-8]\\d\\d(?<!(?:000|500|36[7-9]|3[7-9]\\d|86[7-9]|8[7-9]\\d)))\\d{4}(?i:v|x)$"
                   name="floating_name" #idNumber id="floating_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID
              Number</label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input ngModel type="tel" pattern="^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
                     name="floating_phone" id="floating_phone" #phoneElm
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " required/>
              <label for="floating_phone"
                     class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                number</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" pattern="^[&.0-9a-zA-Z\\s,-]+$" name="floating_address" id="floating_address"
                     #addressElm
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " required/>
              <label for="floating_address"
                     class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
            </div>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
              for="floating_picture">Active/Deactive</label>
            <input id="default-checkbox" type="checkbox" value=""
                   class="w-4 h-4 ms-3 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded active:ring-blue-500 dark:active:ring-blue-600 dark:ring-offset-gray-800 active:ring-2 dark:bg-gray-700 dark:border-gray-600">
          </div>
          <button type="submit"
                  [disabled]="frmNgForm.invalid"
                  class="ms-0.5 text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:outline-none active:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:ring-blue-800">
            Submit
          </button>
        </form>
      </div>

      <div class="grid justify-center items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-gray-900">Salaries Paid</h1>
        <div class="">
          <ul class=" divide-y divide-gray-200 dark:divide-gray-700">
            @for(salary of salaryList; track $index){
            <li class="pb-3 sm:pb-4">
               <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                     <img class="w-8 h-8 rounded-full hover:cursor-pointer" src="../assets/img/default-img.jpg" alt="profile-image">
                  </div>
                  <div class="flex-1 min-w-0">
                     <p class="text-sm font-medium text-white truncate dark:text-gray-900">
            {{salary.year}}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {{salary.month}}
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-white dark:text-gray-900">
              {{salary.salary}}
            </div>

         </div>
      </li>
            }
      </ul>
    </div>
   </div>
</section>

  `,
  styleUrl: './salary.component.scss'
})
export class SalaryComponent {

  salaryList: Array<SalaryDto>;

  constructor(private service:EmployeeService) {
    // this.employeeList;
    this.salaryList = service.getAllSalariesByEmployeeAndYear();
  }

  @Input()
  employee?:EmployeeDto;

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


