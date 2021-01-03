import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements AfterViewInit {
  displayedColumns: string[] = ['joiningDateHdr', 'memberNumberHdr'
    , 'designationHdr', 'subscribeTypeHdr'];

  dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private formBuilder : FormBuilder
    ,private httpClient: HttpClient) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    this.httpClient.get<any>('http://localhost:8080/iwas/api/membership/check'
    ).subscribe(data => {
      console.log(data);
      //console.log("done");
      //console.log(data[0].memberNumberHdr);
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
    });
  }
}
export interface PeriodicElement {
  joiningDateHdr: string;
  memberNumberHdr: string;
  designationHdr: string;
  subscribeTypeHdr: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {joiningDateHdr: 1, memberNumberHdr: 'Hydrogen', designationHdr: 1.0079
//     , subscribeTypeHdr: 'H'}
// ];
