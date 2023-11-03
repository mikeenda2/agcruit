import { Injectable } from '@angular/core';
import { JobListing } from './job-listing';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobListingList: JobListing[] = [
    {
      id:101,
      Title: 'Need help harvesting corn',
      city: 'Lincoln',
      pay: 30,
      description:'Need an extra hand to drive the combine',
      date:'September 15th-16th',
    },
    {
      id:102,
      Title: 'Diggin fences',
      city: 'Lincoln',
      pay: 25,
      description:'need help getting up 1.5 acres of fence',
      date:'sometime in next couple weeks',
    },
    {
      id:103,
      Title: 'Tagging calf',
      city: 'spalding',
      pay: 35,
      description:'got 4 calf that need tagging',
      date:'May 5th',
    },
  ];


  constructor() { }



  getAllJobListings(): JobListing[] {
    return this.jobListingList;
  }

  getJobListingById(id: number): JobListing | undefined {
    return this.jobListingList.find(job => job.id === id);
  }

  submitJobApplication(firstName: string, lastName: string, email: string) {
      console.log(`Job application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
    }
}
