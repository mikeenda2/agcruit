
import { CommonModule } from '@angular/common';
import { EmployeePageComponent } from '../employee-page/employee-page.component';
import { JobPageComponent } from '../job-page/job-page.component';
import { EmployeeInfo } from '../employee-info';
import { JobListing } from '../job-listing';
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { JobsService } from '../jobs.service';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    EmployeePageComponent,
    JobPageComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  jobListingList: JobListing[] = []
  jobService: JobsService = inject(JobsService);

  employeeInfoList: EmployeeInfo[] = []
  employeeService: EmployeesService = inject(EmployeesService);

  constructor(){
    this.jobListingList = this.jobService.getAllJobListings();
    this.employeeInfoList = this.employeeService.getAllEmployeeInfo();
    
  }
  

  newJob: JobListing = {
    id: 0,
    Title: '',
    city: '',
    pay: 0,
    description: '',
    date: '',
  };

  addJobToList() {
    const newJobCopy = { ...this.newJob }; 
    this.jobListingList.push(newJobCopy); 
    this.newJob = {
      id: 0,
      Title: '',
      city: '',
      pay: 0,
      description: '',
      date: '',
    }; 
  }
}
