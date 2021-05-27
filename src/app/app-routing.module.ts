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
import { CoachSessionsComponent } from "./dashboard-coach/coach-sessions/coach-sessions.component";
import { AuthorizationGuard } from "./authorization/authorization.guard";
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { EditCoachingTopicsComponent } from "./dashboard-coach/edit-coaching-topics/edit-coaching-topics.component";
import { AdminDashboardComponent } from './dashboard-admin/admin-dashboard/admin-dashboard.component';
import { UserOverviewComponent } from './dashboard-admin/user-overview/user-overview.component';
import { AdminGuard } from './authorization/admin.guard';
import { EditUserComponent } from './dashboard-admin/edit-user/edit-user.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'register', component: RegisterComponent, },
  { path: 'egg', component: EasterEggComponent, canActivate: [AuthenticationGuard], },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: MyProfileComponent, },
      { path: 'become-coach', component: BecomeCoachComponent, },
      { path: 'coachee-sessions', component: CoacheeSessionsComponent },
      { path: 'edit-profile', component: EditProfileComponent }
    ]
  },
  {
    path: 'dashboard-coach',
    component: CoachDashboardComponent,
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    children: [
      { path: '', component: MyCoachProfileComponent },
      { path: 'coach-sessions', component: CoachSessionsComponent },
      { path: 'edit-coaching-topics', component: EditCoachingTopicsComponent }
    ]
  },
  {
    path: 'dashboard-admin',
    component: AdminDashboardComponent,
    canActivate: [AuthenticationGuard, AuthorizationGuard, AdminGuard],
    children: [
      { path: '', component: UserOverviewComponent },
      { path: 'edit/:id', component: EditUserComponent },
    ]
  },
  { path: 'user/:id', component: UserProfileComponent, canActivate: [AuthenticationGuard], },
  { path: 'coaches', component: CoachOverviewComponent, canActivate: [AuthenticationGuard], },
  { path: 'create-session/:id', component: SessionRequestComponent, canActivate: [AuthenticationGuard], }
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
