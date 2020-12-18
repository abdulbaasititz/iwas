import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembershipComponent} from "./membership/membership.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path : 'membership', component : MembershipComponent},
  { path : 'dashboard',  component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
