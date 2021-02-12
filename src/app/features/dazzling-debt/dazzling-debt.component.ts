import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dazzling-debt',
  templateUrl: './dazzling-debt.component.html',
  styleUrls: ['./dazzling-debt.component.scss']
})
export class DazzlingDebtComponent implements OnInit {
  value = "clear me";
  dazzlingDebtForm: FormGroup;
  date = new FormControl(new Date());
  
  constructor(private formBuilder: FormBuilder
    , private httpClient: HttpClient) {
    this.dazzlingDebtForm = this.formBuilder.group({
      duration: [''],
      alazhiyaKadan: ['', Validators.required],
      memberNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      permanentCity: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      whatsappNumber: ['', Validators.required],
      currentAddress: ['', Validators.required],
      currentCity: ['', Validators.required],
      witOneMemberNumber: ['', Validators.required],
      witOneAadharNumber: ['', Validators.required],
      witOneName: ['', Validators.required],
      witOneFatherName: ['', Validators.required],
      witOnePermanentAddress: ['', Validators.required],
      witOnePermanentCity: ['', Validators.required],
      witTwoMemberNumber: ['', Validators.required],
      witTwoAadharNumber: ['', Validators.required],
      witTwoName: ['', Validators.required],
      witTwoFatherName: ['', Validators.required],
      witTwoPermanentAddress: ['', Validators.required],
      witTwoPermanentCity: ['', Validators.required],
      jmtName:['', Validators.required],
      appName:['', Validators.required],
    });
  }
  
  ngOnInit(): void {
  }
  
  submit() {
    console.log(this.dazzlingDebtForm.value);
  }

  clearClick() {
    this.dazzlingDebtForm.reset();
  }
}
