import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembershipComponent} from "./features/membership/membership.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {SubscriptionComponent} from "./features/subscription/subscription.component";
import {DazzlingDebtComponent} from "./features/dazzling-debt/dazzling-debt.component";

const routes: Routes = [
  { path : 'membership', component : MembershipComponent},
  { path : 'dashboard',  component : DashboardComponent},
  { path : 'subscription',  component : SubscriptionComponent},
  {path : 'dazzling-debt',   component:DazzlingDebtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
