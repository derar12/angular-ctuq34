import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { makePersonFormGroup } from '../models/person';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  nameError: boolean = false;
  constructor(private cartService: CartService, private formBuilder: FormBuilder)
   {
  this.items = this.cartService.getTTItems()

this.checkoutForm = makePersonFormGroup();
/*
this.passwordForm = this.checkoutForm.group({
  password: ['', [Validators.required]],
  confirmPassword: [''] }
  , {validator: this.passwordForm }) 
   }
*/}
  ngOnInit() {
    this.checkoutForm.valueChanges
    .pipe(
      tap(v => console.log('in the pipe, the value is: ', v))
    )
    .subscribe(
      form => {
        console.log('the form group is: ', this.checkoutForm);
        console.log('the form is: ', form);
      }
    );
  }
 onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearrrCart();
    this.checkoutForm.reset();
  }
  
}
function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.passwordCheck.value;

  return pass === confirmPass ? null : { notSame: true }     
}