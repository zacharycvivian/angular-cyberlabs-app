import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { VmViewComponent } from './vm-view/vm-view.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'teacher-dashboard', component: TeacherDashboardComponent },
  { path: 'vm-view', component: VmViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

