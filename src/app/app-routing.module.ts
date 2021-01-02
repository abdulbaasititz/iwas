import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateMemberComponent} from "./features/membership/create-member/create-member.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {SubscriptionComponent} from "./features/subscription/subscription.component";
import {DazzlingDebtComponent} from "./features/dazzling-debt/dazzling-debt.component";
import {ViewMemberComponent} from "./features/membership/view-member/view-member.component";
import {LoginComponent} from "./features/login/login.component"

const routes: Routes = [
  { path : 'create-member', component : CreateMemberComponent},
  { path : 'view-member', component : ViewMemberComponent},
  { path : 'dashboard',  component : DashboardComponent},
  { path : 'subscription',  component : SubscriptionComponent},
  { path : 'dazzling-debt',   component:DazzlingDebtComponent},
  { path : 'login',   component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
