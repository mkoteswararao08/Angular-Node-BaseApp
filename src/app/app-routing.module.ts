import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addUser',component: AddUserComponent },
  {path:'UserList', component:ListOfUsersComponent },
  {path:'updateUser/:id',component:UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
