import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {initFlowbite} from "flowbite";


@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="bg-white dark:bg-gray-900">
        <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'frontend';

  ngOnInit() {
    initFlowbite();
  }
}
