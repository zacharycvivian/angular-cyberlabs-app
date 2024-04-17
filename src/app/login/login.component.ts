import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(username: string, password: string) {
    console.log(username, password);
    if (username === 'teacher' && password === 'password') {
      this.router.navigate(['/teacher-dashboard']);
    } else if (username === 'student' && password === 'password') {
      this.router.navigate(['/student-dashboard']);
    } else {
      console.log('Invalid credentials');
      alert('Invalid credentials');
    }
  }
  redirectToCreateAccount() {
    this.router.navigate(['/create-account']);
  }

  /*
  redirectToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  */
}
