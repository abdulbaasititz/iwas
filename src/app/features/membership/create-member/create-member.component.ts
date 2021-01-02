import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-membership',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  value="clear me";
  date = new FormControl(new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
