import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dazzling-debt',
  templateUrl: './dazzling-debt.component.html',
  styleUrls: ['./dazzling-debt.component.scss']
})
export class DazzlingDebtComponent implements OnInit {
  value="clear me";
  date = new FormControl(new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
