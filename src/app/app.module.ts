import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { NavbarComponent } from './Interfaces/RH/navbar/navbar.component';
import { NavbarEmpComponent } from './Interfaces/Employe/navbar-emp/navbar-emp.component';
import { LoginComponent } from './Interfaces/Employe/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeesDepComponent } from './Interfaces/RH/list-employees-dep/list-employees-dep.component';
import { LoginRhComponent } from './Interfaces/RH/login-rh/login-rh.component';
import { ListCongeComponent } from './Interfaces/RH/list-conge/list-conge.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeEmpComponent,
    HomeRhComponent,
    PerformingEmpComponent,
    NavbarComponent,
    NavbarEmpComponent,
    LoginComponent,
    ListEmployeesDepComponent,
    LoginRhComponent,
    ListCongeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
