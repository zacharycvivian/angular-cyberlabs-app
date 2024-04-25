import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class StudentDashboardComponent {
  currentView: string = '';
  selectedCourse: string | null = null;
  selectedLab: any = null;
  //We will need to modify this to actually include information from the SQL database
  courses: string[] = [
    'Introduction to Cybersecurity',
    'Database Design & Implementation',
    'Network Security',
    'IT Security',
  ];
  labs: any[] = [];
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  // Default view when no courses are selected
  defaultView(): void {
    this.currentView = 'welcome';
    this.selectedCourse = null;
    this.selectedLab = null;
  }

  // Loads default view
  ngOnInit(): void {
    this.defaultView(); // Set the default view when the component initializes
  }

  //For adding files for lab submission
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  //Logic for handling the submission of a lab
  submitWork(): void {
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
    // Handle the file upload process, e.g., sending it to a backend server
    console.log(
      `Submitting ${this.selectedFile.name} for ${this.selectedLab.name}`
    );
    // Update lab status to completed
    this.selectedLab.status = 'Completed';
  }

  //Show the courses view in the content window
  showCourses() {
    this.currentView = 'courses';
    this.selectedCourse = null;
    this.labs = [];
  }

  //Logic for selecting a course to be able to show labs for that course
  selectCourse(course: string) {
    this.selectedCourse = course;
    this.currentView = 'labs';
    this.labs = this.getLabsForCourse(course);
  }

  //Logic for selecting a lab and show in the content window
  selectLab(lab: any) {
    this.selectedLab = lab;
    this.currentView = 'currentLab';
  }

  //This is just for dummy data for now, will need to properly incorporate database information from SQL
  getLabsForCourse(course: string): any[] {
    const courseLabs: { [key: string]: any[] } = {
      'Introduction to Cybersecurity': [
        {
          name: 'Lab 1: Basic Security Protocols',
          instructor: 'Joshua Yue',
          instructions: 'Complete steps on securing protocols.',
          status: 'Completed',
          submission: '',
          dueDate: '2024-04-30',
        },
        {
          name: 'Lab 2: Threat Analysis',
          instructor: 'Joshua Yue',
          instructions: 'Analyze reported threats.',
          status: 'In Progress',
          submission: '',
          dueDate: '2024-05-15',
        },
      ],
      'Database Design & Implementation': [
        {
          name: 'Lab 1: SQL Injection',
          instructor: 'Mohammad Ashrafuzzaman',
          instructions: 'Perform SQL injection on a sample database.',
          status: 'In Progress',
          submission: '',
          dueDate: '2024-04-25',
        },
        {
          name: 'Lab 2: Data Normalization',
          instructor: 'Mohammad Ashrafuzzaman',
          instructions: 'Normalize the given database schema.',
          status: 'Late',
          submission: '',
          dueDate: '2024-05-05',
        },
      ],
      'Network Security': [
        {
          name: 'Lab 1: Firewall Setup',
          instructor: 'Yanwei Wu',
          instructions:
            'Set up and configure a firewall using given specifications.',
          status: 'Completed',
          submission: '',
          dueDate: '2024-04-28',
        },
        {
          name: 'Lab 2: Intrusion Detection Systems',
          instructor: 'Yanwei Wu',
          instructions: 'Implement an IDS and document its alerts.',
          status: 'Completed',
          submission: '',
          dueDate: '2024-05-05',
        },
      ],
      'IT Security': [
        {
          name: 'Lab 1: Compliance Regulations',
          instructor: 'Bassam Zahran',
          instructions: 'Review compliance regulations and prepare a report.',
          status: 'Completed',
          submission: '',
          dueDate: '2024-05-01',
        },
        {
          name: 'Lab 2: Secure Software Development',
          instructor: 'Bassam Zahran',
          instructions: 'Develop a small secure software application.',
          status: 'In Progress',
          submission: '',
          dueDate: '2024-05-11',
        },
      ],
    };
    return courseLabs[course] || [];
  }

  //Opens the VM view in a new tab
  openVmView() {
    this.router.navigate(['/vm-view']);
  }

  //Logout logic, make sure to incorporate an auth system so users cannot redirect to this URL without logging in first
  logout() {
    this.router.navigate(['/login']);
  }
}
