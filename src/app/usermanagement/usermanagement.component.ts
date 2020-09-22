import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConService } from '../api-con.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {




  constructor(private router: Router, private service: ApiConService, private formBuilder: FormBuilder) { }

  signin: FormGroup

  ngOnInit() {
    this.signin = this.formBuilder.group({

      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'contact': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'confirmpwd': ['', Validators.compose([Validators.required, Validators.email])],
      //  usergroup :  req.body.usergroup,
      'dept_branch_id': ['', Validators.required],
      'dept_id': ['', Validators.required],
      'active': ['', Validators.required],
      'confirmed': ['', Validators.required],
      //assoc_role:req.body.assoc_role,
      'mod_per_id': ['', Validators.required],
      'role_perm_id': ['', Validators.required],

    });
  }

  onSubmit() {
    console.log(this.signin.value)
    this.service.authUser(this.signin.value)
  }

}
