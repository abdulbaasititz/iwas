import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-membership',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  value="clear me";
  membershipForm : FormGroup;
  //date = new FormControl(new Date());
  constructor(private formBuilder : FormBuilder
              ,private httpClient: HttpClient) {
    this.membershipForm = this.formBuilder.group({
      // joiningDateHdr: [new FormControl(new Date()).value],
      id:['0'],
      joiningDate:['' , Validators.required],
      memberNumber: ['' , Validators.required],
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
    // this.membershipForm.controls.joiningDateHdr.disable();
    // this.membershipForm.controls.memberNumberHdr.disable();
    // this.membershipForm.controls.designationHdr.disable();
    // this.membershipForm.controls.subscribeTypeHdr.disable();
  }
  submitOld(){

    this.httpClient.get<any>('http://localhost:8080/iwas/api/membership/check'
    ).subscribe(data => {
      console.log(data);
      console.log("done");
      console.log(data[0].memberNumberHdr);
    });
  }

  submit() {
    console.log(this.membershipForm.value);
    return this.httpClient.post<any>("http://localhost:8080/iwas/api/membership/post",
      this.membershipForm.value
    ). subscribe ( response => {
      if(response){
        console.log(response);
        this.membershipForm.reset();
      }else{
        alert("not found");
      }
    });
  }
  clearClick(){
    this.membershipForm.reset();
  }
}
