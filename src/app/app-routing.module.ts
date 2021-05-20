import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from "./register/register.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MyProfileComponent } from './dashboard/my-profile/my-profile.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { CoachOverviewComponent } from "./coach-overview/coach-overview.component";
import { BecomeCoachComponent } from "./dashboard/become-coach/become-coach.component";
import { SessionRequestComponent } from "./session-request/session-request.component";
import { CoachDashboardComponent } from './dashboard-coach/coach-dashboard/coach-dashboard.component';
import { MyCoachProfileComponent } from './dashboard-coach/my-coach-profile/my-coach-profile.component';
import { CoacheeSessionsComponent } from './dashboard/coachee-sessions/coachee-sessions.component';
import {CoachSessionsComponent} from "./dashboard-coach/coach-sessions/coach-sessions.component";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'register', component: RegisterComponent, },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '', // child route path
        component: MyProfileComponent, // child route component that the router renders
      },
      {
        path: 'become-coach',
        component: BecomeCoachComponent,
      },
      {
        path: 'coachee-sessions',
        component: CoacheeSessionsComponent
      }
    ]
  },
  {
    path: 'dashboard-coach',
    component: CoachDashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: MyCoachProfileComponent },
      { path: 'coach-sessions', component: CoachSessionsComponent}
    ]
  },
  { path: 'user/:id', component: UserProfileComponent, canActivate: [AuthenticationGuard],},
  { path: 'coaches', component: CoachOverviewComponent, canActivate: [AuthenticationGuard], },
  { path: 'create-session/:id', component: SessionRequestComponent, canActivate: [AuthenticationGuard],  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    // When moving from one page to the other page, scroll to top.
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
