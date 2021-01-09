import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements AfterViewInit {
  displayedColumns: string[] = ['joiningDateHdr', 'memberNumberHdr', 'designationHdr'
    , 'name', 'fatherName', 'permanentAddress'
    , 'permanentCity', 'mobileNumber', 'whatsappNumber'
    , 'aadharNumber', 'currentAddress', 'currentCity'];

  //dataSource = new MatTableDataSource<PeriodicElement>();
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private formBuilder : FormBuilder
    ,private httpClient: HttpClient) {

  }
  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.httpClient.get<any>('http://localhost:8080/iwas/api/membership/get'
    ).subscribe(data => {
      console.log(data);
      //console.log("done");
      //console.log(data[0].memberNumberHdr);
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
    });
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  joiningDateHdr: string;
  memberNumberHdr: string;
  designationHdr: string;
  name: string;
  fatherName: string;
  permanentAddress: string;
  permanentCity: string;
  mobileNumber: string;
  whatsappNumber: string;
  aadharNumber: string;
  currentAddress: string;
  currentCity: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    joiningDateHdr: '01-06-2015',
    memberNumberHdr: '1',
    designationHdr: 'Admin',
    name: 'Hilur Mohamed (raja)',
    fatherName:'Abdul Gaffoor',
    permanentAddress: 'Kaithey Millath Nagar',
    permanentCity: 'Swamimalai',
    mobileNumber: '96598095528',
    whatsappNumber: '96598095528',
    aadharNumber: '',
    currentAddress: '',
    currentCity: 'KUWAIT',
  },
  {
    joiningDateHdr: '01-06-2015',
    memberNumberHdr: '1',
    designationHdr: 'Member',
    name: 'Hilur Mohamed (raja)',
    fatherName:'Abdul Gaffoor',
    permanentAddress: 'Kaithey Millath Nagar',
    permanentCity: 'Swamimalai',
    mobileNumber: '96598095528',
    whatsappNumber: '96598095528',
    aadharNumber: '',
    currentAddress: '',
    currentCity: 'KUWAIT',
  }
];
