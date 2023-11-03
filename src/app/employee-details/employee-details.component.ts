import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { EmployeeInfo } from '../employee-info';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  employeeInfoId = -1;
  employeeInfo: EmployeeInfo | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  
  constructor(private employeeService: EmployeesService) {
    this.employeeInfoId = Number(this.route.snapshot.params['id']);
    this.employeeInfo = this.employeeService.getEmployeeInfoById(this.employeeInfoId);
  }
  
  submitApplication() {
    this.employeeService.submitEmployeeApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}