import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from "./register/register.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import { MyProfileComponent } from './dashboard/my-profile/my-profile.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: UserDashboardComponent ,
  children: [
    {
      path: '', // child route path
      component: MyProfileComponent, // child route component that the router renders
    },
    // {
    //   path: 'child-b',
    //   component: , // another child route component that the router renders
    // },
  ]
},
  {path: 'user/:id', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
