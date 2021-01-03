import { Component, OnInit } from '@angular/core';
import {MembershipService} from "./membership.service";


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  getUserName:String;
  getPassword:String;
  passValue : Map<String,String>=new Map<String, String>();
  joiningDate: any;
  id: any;
  memberName: any;
  memberNo: any;
  value: Date;
  constructor(private membershipService : MembershipService) {

  }

  ngOnInit(): void {
  }
  saveMemberData(){
    this.passValue.set("id",this.id);
    this.passValue.set("joiningDate",this.joiningDate);
    this.passValue.set("memberName",this.memberName);
    this.passValue.set("memberNo",this.memberNo);
    this.membershipService.saveMemberData(this.passValue);
  }


  checkConnection(){
    this.membershipService.checkConnection().subscribe(response =>{
      if(response){console.log(response)}else{console.log("error");}
    });
  }
  handleClick(val) {
    this.passValue.set("username",this.getUserName);
    this.passValue.set("password",this.getPassword);
    this.membershipService.passParam(this.passValue). subscribe ( response => {
      if(response){
        alert("pakka");
      }else{
        alert("not found");
      }
    });
  }


}
