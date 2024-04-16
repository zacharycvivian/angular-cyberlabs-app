import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  //Dummy data for redirecting to teacher or student dashboards, will need to use the SQL database and validate authorization information in the dashboards so users cannot change the url to /student-dashboard or /teacher-dashboard and edit data
  login(username: string, password: string) {
    console.log(username, password); 
    if (username === 'teacher' && password === 'password') {
      console.log('Redirecting to teacher dashboard');
      this.router.navigate(['/teacher-dashboard']);
    } else if (username === 'student' && password === 'password') {
      this.router.navigate(['/student-dashboard']);
    } else {
      console.log('Invalid credentials');
      alert('Invalid credentials');
    }
  }
  
}
