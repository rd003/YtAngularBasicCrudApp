import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AddUpdateStudentComponent } from './components/add-update-student/add-update-student.component';
import { DisplayStudentComponent } from './components/display-student/display-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUpdateStudentComponent,
    DisplayStudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
