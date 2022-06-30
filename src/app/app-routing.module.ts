import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mycomponents/home/home.component';
import { UserDetailsComponent } from './mycomponents/user-details/user-details.component';
import { UserComponent } from './mycomponents/user/user.component';
import { UsersListComponent } from './mycomponents/users-list/users-list.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'active',
    /* component:UsersListComponent, */
    component:UserComponent,
  },
  {
    path:'deleted',
    component:UsersListComponent,
  },
    {
    path:'manage',
    component:UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
