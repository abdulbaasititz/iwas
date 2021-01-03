import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private val: Observable<Object>;
  // private sampleJson :
  authTokenDao = {
    accessToken: "",
    refreshToken: ""
  };
  joiningDate: any;
  id: any;
  memberName: any;
  memberNo: any;
  stringifiedData: any;

  constructor(private httpClient: HttpClient) {

  }

  passParam(getPassValue: Map<String, String>) {
    //this.val = this.httpClient.get("localhost:9008/"+getVal);
    return this.httpClient.post("http://localhost:8080/api/auth/login", {
      "username": getPassValue.get("getUserName"),
      "password": getPassValue.get("getPassword")
    });
    // console.log("Before parse :" , this.stringifiedData);
    //
    // // this.authTokenDao = JSON.parse(this.stringifiedData);
    // // console.log("With Parsed JSON :" , this.authTokenDao);
    // return this.stringifiedData;
  }

  checkConnection() {
    return this.httpClient.get("http://localhost:8080/iwas/api/membership/check");
  }

  saveMemberData(passValue: Map<String, String>) {
    const headers = {'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar'};
    const body = {
      "id": passValue.get("id"),
      "joiningDate": passValue.get("joiningDate"),
      "memberName": passValue.get("memberName"),
      "memberNo": passValue.get("memberNo")
    };
    this.httpClient.post<any>('http://localhost:8080/iwas/api/membership/',
      body,
      {headers}).subscribe(data => {
      console.log(data);
    });
  }
}
