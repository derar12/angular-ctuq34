

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import { makePasswordFormGroup } from '../models/password';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordForm;
  nameError: boolean = false;
  constructor( private formBuilder: FormBuilder,)
   {
     //this.passwordForm = makePasswordFormGroup();
     
  this.passwordForm = new FormGroup
  ({
    'pass': new FormControl(this.hero.power, Validators.required)
});

  }


  ngOnInit() {
  }
 onSubmit(customerData) {
    // Process checkout data here
    this.passwordForm.reset();
  }
  
}
function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.passwordCheck.value;

  return pass === confirmPass ? null : { notSame: true }     
}