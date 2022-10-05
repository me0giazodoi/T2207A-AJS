import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {LoginComponent} from "./Btapbuoi4/Login.component";
import {RegisterComponent} from "./Btapbuoi4/Register.component";
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./Btapbuoi4/Weather.component";

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Weather',component:WeatherComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent, StudentComponent, TeacherComponent,
    LoginComponent, RegisterComponent, WeatherComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
