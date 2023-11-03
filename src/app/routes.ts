import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { JobDetailsComponent } from './job-details/job-details.component';


const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent,
    title: 'Employee Details '
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent,
    title: 'Job Details '
  }
];

export default routeConfig;