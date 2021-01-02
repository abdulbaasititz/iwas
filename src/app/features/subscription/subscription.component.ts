import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
//
// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  value="clear me";
  subscriptionForm: FormGroup;
  date = new FormControl(new Date());

  constructor(private formBuilder: FormBuilder) {
    this.subscriptionForm = this.formBuilder.group({
      memberNumber: [''],
      aadharNumber: ['',Validators.required],
      payment: [''],
      firstName: [''],
      lastName: [''],
      fatherFirstName: [''],
      fatherLastName: [''],
      mobileNumber: [''],
      whatsappNumber: [''],
    });
  }

  ngOnInit(): void {
    this.subscriptionForm.controls.memberNumber.disable();
  }

  submit() {
    console.log(this.subscriptionForm.value);
  }
}
