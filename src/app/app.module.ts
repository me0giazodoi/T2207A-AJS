import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {LoginComponent} from "./Btapbuoi4/Login.component";
import {RegisterComponent} from "./Btapbuoi4/Register.component";

@NgModule({
  declarations: [
    AppComponent, ClassroomComponent, StudentComponent, TeacherComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
