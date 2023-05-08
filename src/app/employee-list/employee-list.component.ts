import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees : Employee[];

  constructor(private employeeService: EmployeeServiceService) {
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
  }

}
