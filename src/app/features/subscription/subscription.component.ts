import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  value = "clear me";
  subscriptionForm: FormGroup;
  date = new FormControl(new Date());

  //date = new FormControl(new Date());
  constructor(private formBuilder : FormBuilder
              ,private httpClient: HttpClient) {
    this.subscriptionForm = this.formBuilder.group({
      id:['0'],
      memberNumber: ['' , Validators.required],
      aadharNo:[''],
      receivedDate:['' , Validators.required],
      payment:['',Validators.required],
      
      designation: ['' , Validators.required],
      subscribeType: ['Yearly'],
      
      name: ['' , Validators.required],
      fatherName: ['' , Validators.required],
      permanentAddress: ['' , Validators.required],
      permanentCity: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      whatsappNumber: ['' , Validators.required],
      aadharNumber: ['' , Validators.required],
      currentAddress: ['' , Validators.required],
      currentCity: ['' , Validators.required],
       });
  }

  ngOnInit(): void {
    this.subscriptionForm.controls.memberNumber.disable();
    this.subscriptionForm.controls.aadharNo.disable();
    this.subscriptionForm.controls.receivedDate.disable();
    this.subscriptionForm.controls.payment.disable();

  }

  submit() {
    console.log(this.subscriptionForm.value);
  }
  clearClick(){
    this.subscriptionForm.reset();
  }
}
