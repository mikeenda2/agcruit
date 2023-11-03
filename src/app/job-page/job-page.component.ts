import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListing } from '../job-listing';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-page.component.html', 
  styleUrls: ['./job-page.component.css']
})
export class JobPageComponent {
  @Input() jobListing!: JobListing;

}
