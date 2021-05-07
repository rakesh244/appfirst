import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistationComponent } from './user-registation/user-registation.component';
import { UserRegistation1Component } from './user-registation1/user-registation1.component';
import { UserRegistation2Component } from './user-registation2/user-registation2.component';
import { UserRegistation3Component } from './user-registation3/user-registation3.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistationComponent,
    UserRegistation1Component,
    UserRegistation2Component,
    UserRegistation3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
