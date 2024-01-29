import {Component, inject, Input} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {EmployeeDto} from "../dto/employee-dto";

@Component({
  selector: 'app-employees',
  template: `
    <section id="book-details" class="bg-gray-900 dark:bg-white ">
      <div class="grid justify-center items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-gray-900">List of employees</h1>
        <div class="">
          <ul class=" divide-y divide-gray-200 dark:divide-gray-700">
            @for(employee of employeeList; track $index){
            <li class="pb-3 sm:pb-4">
               <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                     <img class="w-8 h-8 rounded-full hover:cursor-pointer" src="../assets/img/default-img.jpg" alt="profile-image">
                  </div>
                  <div class="flex-1 min-w-0">
                     <p class="text-sm font-medium text-white truncate dark:text-gray-900">
                        {{employee.idNumber}}
                     </p>
                     <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {{employee.address}}
                      </p>
                   </div>
                   <div class="inline-flex items-center text-base font-semibold text-white dark:text-gray-900">
                        T.P. {{employee.contactNumber}}
                   </div>
                   <div>
                     <button (click)="onEmployeeDelete(employee)" type="button">
                          <svg class="w-6 h-6 text-white dark:text-gray-800 hover:text-blue-600 hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2"/>
                        </svg>
                     </button>
                   </div>
                   <div>
                    <button  type="button">
                        <svg class="w-6 h-6 text-white dark:text-gray-800 hover:text-red-600 hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                      </svg>
                    </button>
                   </div>
                </div>
             </li>
            }
          </ul>
        </div>
        <div class="m-auto">
          <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-10 text-base">
              <li>
                <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Previous</span>
                  <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Next</span>
                  <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Modal toggle -->
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class=" m-auto mt-5 block text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
          Add New Employee
        </button>
      </div>

      <!-- Main modal -->
      <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow bg-white dark:bg-gray-900">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Add New Employee
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <form class="p-4 md:p-5">
              <app-form></app-form>

            </form>
          </div>
        </div>
      </div>
    </section>
  `,
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
