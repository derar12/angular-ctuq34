
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Password {
  password: string;
  passwordCheck: string;
}
export function makePassword(password?: Password) {
  // if person exists ... return person otherwise set default values
  return !!password ? {...password} : {password: '', passwordCheck: ''};
}
export function makePasswordFormGroup(password?: Password): FormGroup  {
  const p = makePassword(password);
  // creates form 
  let newPassForm = new FormBuilder().group({
  password: [p.password, [Validators.required,Validators.minLength(3)]],
  
  confirmPassword: [p.passwordCheck,[Validators.required]] },
   this.checkPasswords)

/*
  //passes form into function "pseudo validasator"
  if( checkPasswords(newPassForm) == null){
    return newPassForm;
  }*/
  return newPassForm;
  }

// validators typically return nothing/null if it passes. otherwises it returns something back to signal there is an error
function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.passwordCheck.value;

  return pass === confirmPass ? null : { notSame: true }     
}
/*
// /** A hero's name can't match the given regular expression 
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}*/