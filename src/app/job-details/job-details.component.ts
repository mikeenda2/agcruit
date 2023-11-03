import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';
import { JobListing } from '../job-listing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  jobListingId = -1;
  jobListing: JobListing | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private jobService: JobsService) {
    this.jobListingId = Number(this.route.snapshot.params['id']);
    this.jobListing = this.jobService.getJobListingById(this.jobListingId);
  }

  submitApplication() {
    this.jobService.submitJobApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}

