import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'auth'
}, {
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [AuthGuard]
}, {
  path: 'employee',
  loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
