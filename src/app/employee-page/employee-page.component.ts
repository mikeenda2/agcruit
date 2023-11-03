import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInfo } from '../employee-info';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent {
  filteredEmployeeList: EmployeeInfo[] = [];

  @Input() employeeInfoList: EmployeeInfo[] = [];

  constructor(private employeesService: EmployeesService) {
    this.employeeInfoList = this.employeesService.getAllEmployeeInfo();
    this.filteredEmployeeList = this.employeeInfoList.slice();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredEmployeeList = this.employeeInfoList;
    } else {
      this.filteredEmployeeList = this.employeeInfoList.filter(
        (employeeInfo) =>
          employeeInfo.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }



}
