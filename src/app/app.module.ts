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
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from "./Btapbuoi8/Menu.component";

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'weather',component:WeatherComponent},
  {path:'menu',component:MenuComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent, StudentComponent, TeacherComponent,
    LoginComponent, RegisterComponent, WeatherComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
