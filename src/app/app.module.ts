import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembershipComponent } from './features/membership/membership.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SubscriptionComponent } from './features/subscription/subscription.component';

//material design
import {MatCardModule} from '@angular/material/card'; //mat card
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatIconModule} from "@angular/material/icon";
import { DazzlingDebtComponent } from './features/dazzling-debt/dazzling-debt.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SubscriptionComponent,
    DazzlingDebtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatSliderModule,MatButtonModule, MatInputModule, MatCardModule,
    MatDatepickerModule,MatNativeDateModule, MatRippleModule,MatIconModule,MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
