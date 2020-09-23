import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiConService } from '../api-con.service';
// import { UserManagement } from '../../app/user.model'

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  userForm = {
    firstname: '',
    lastname: '',
    email: '',
    contact: null,
    password: '',
    confirmpwd: '',

    dept_branch_id: null,
    dept_id: null,
    active: null,
    confirmed: null,

    mod_per_id: null,
    role_perm_id: null
  }

  submitted = false;
  constructor(private api: ApiConService) { }

  ngOnInit(): void {

  }


  onFormSubmit() {
    const data = {
      firstname: this.userForm.firstname,
      lastname: this.userForm.lastname,
      email: this.userForm.email,
      contact: this.userForm.contact,
      password: this.userForm.password,
      confirmpwd: this.userForm.confirmpwd,

      dept_branch_id: this.userForm.dept_branch_id,
      dept_id: this.userForm.dept_id,
      active: this.userForm.active,
      confirmed: this.userForm.confirmed,

      mod_per_id: this.userForm.mod_per_id,
      role_perm_id: this.userForm.role_perm_id

    }



    this.api.userCreate(data)
      .subscribe((res: any) => {
        console.log(res)
        this.submitted = true;
        //  const id = res._id;​

        //   this.router.navigate(['/login/dashboard-detail']);​

      }, (err: any) => {

        console.log(err);

      });

  }

  addUser(): void {
    this.submitted = false;
    this.userForm = {
      firstname: '',
      lastname: '',
      email: '',
      contact: null,
      password: '',
      confirmpwd: '',

      dept_branch_id: null,
      dept_id: null,
      active: null,
      confirmed: null,

      mod_per_id: null,
      role_perm_id: null
    }
  }

}
