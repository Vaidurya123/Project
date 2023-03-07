import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgethomeComponent } from './budgethome/budgethome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { SavingsComponent } from './savings/savings.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    BudgethomeComponent,
    LoginComponent,
    SignupComponent,
    ExpenditureComponent,
    SavingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
