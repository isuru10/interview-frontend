import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {initFlowbite} from "flowbite";


@Component({
  selector: 'app-root',
  template: `
    <app-book-details></app-book-details>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'frontend';

  ngOnInit() {
    initFlowbite();
  }
}
