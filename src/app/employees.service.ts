import { Injectable } from '@angular/core';
import { EmployeeInfo } from './employee-info';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeeInfoList: EmployeeInfo[] = [
    {
      id: 102,
      name: 'Michael Endacott',
      city: 'Lincoln',
      photo: '../assets/michael.jpeg',
      rating: 5,
      skills: [
        'CDL','Landscaping','Woodworking'
      ],
      availability:'Saturdays',
    },
    {
      id: 103,
      name: 'Evan Wilson',
      city: 'Lincoln',
      photo: '../assets/evan.jpeg',
      rating: 4.5,
      skills: [
        'Combine Driving ','Skid Steer ','CDL License'
      ],
      availability:'weekends',
    },
    {
      id: 104,
      name: 'Conner Gokie',
      city: 'Lincoln',
      photo: '../assets/gokie.jpeg',
      rating: 5,
      skills: [
        'Small Engines','Snow Removal','Hay Bailing'
      ],
      availability:'flexible',
    }
  ];

  filteredEmployeeList:EmployeeInfo[] = this.employeeInfoList;

  constructor() { }


  getAllEmployeeInfo(): EmployeeInfo[] {
    return this.employeeInfoList;
  }

  getEmployeeInfoById(id: number): EmployeeInfo | undefined {
    return this.employeeInfoList.find(employee => employee.id === id);
  }

  submitEmployeeApplication(firstName: string, lastName: string, email: string) {
    console.log(`Employee application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

}
