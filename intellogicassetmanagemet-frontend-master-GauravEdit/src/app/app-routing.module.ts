import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { CreatedeptComponent } from './createdept/createdept.component';
import { CreateroleComponent } from './createrole/createrole.component';
import { CreatepermissionComponent } from './createpermission/createpermission.component';
import { CreatebranchComponent } from './createbranch/createbranch.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MatNavComponent } from './mat-nav/mat-nav.component'

const routes: Routes = [
  { path: '', redirectTo: 'login/dashboard/usermanagement', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MatNavComponent },
  { path: 'login/dashboard', component: DashboardComponent },
  { path: 'login/dashboard/usermanagement', component: UsermanagementComponent },
  { path: 'login/dashboard/createdept', component: CreatedeptComponent },
  { path: 'login/dashboard/createrole', component: CreateroleComponent },
  { path: 'login/dashboard/createpermission', component: CreatepermissionComponent },
  { path: 'login/dashboard/createbranch', component: CreatebranchComponent },
  { path: 'login/edituser', component: EdituserComponent },
  { path: 'login/dashboard/manageuser', component: ManageuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
