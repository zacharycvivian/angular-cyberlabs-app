import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vm-view',
  templateUrl: './vm-view.component.html',
  styleUrls: ['./vm-view.component.css']
})
export class VmViewComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
