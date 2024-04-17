import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class CreateAccountComponent {
  constructor(private router: Router) {}

  createAccount(formValue: any) {
    const { name, email, password, verifyPassword } = formValue;
    if (password === verifyPassword) {
      console.log('Account creation successful for:', name);
      alert(`Account successfully created for ${name}! Please log in.`);
      // Ideally, connect this to your backend for actual account creation
      this.router.navigate(['/login']); // Redirect to login on successful account creation
    } else {
      alert('Passwords do not match');
    }
  }
}
