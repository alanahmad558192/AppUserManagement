import { Routes } from '@angular/router';
import { UserManagementComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: 'users', component: UserManagementComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];
