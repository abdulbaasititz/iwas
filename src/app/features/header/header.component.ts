import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppConstants} from "../../core/utils/AppConstants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = AppConstants.routes;
  constructor() { }

  ngOnInit(): void {
  }

}
