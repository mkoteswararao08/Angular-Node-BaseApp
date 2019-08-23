import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayOutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import{ NavBarComponent } from './navbar/navbar.component';
import {AddUserComponent } from './add-user/add-user.component';
import {ListOfUsersComponent} from './list-of-users/list-of-users.component';
import {UpdateUserComponent} from './update-user/update-user.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,LayOutComponent,NavBarComponent,AddUserComponent,ListOfUsersComponent,UpdateUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
