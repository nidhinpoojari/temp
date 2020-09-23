import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CreatedeptComponent } from './createdept/createdept.component';
import { CreateroleComponent } from './createrole/createrole.component';
import { CreatepermissionComponent } from './createpermission/createpermission.component';
import { CreatebranchComponent } from './createbranch/createbranch.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsermanagementComponent,
    CreatedeptComponent,
    CreateroleComponent,
    CreatepermissionComponent,
    CreatebranchComponent,
    EdituserComponent,
    ManageuserComponent,
    MatNavComponent,
    MatDashboardComponent
  ],
  imports: [

    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgModule,
   
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    LayoutModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
