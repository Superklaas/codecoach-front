import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CoachOverviewComponent } from "./find-a-coach/coach-overview/coach-overview.component";
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { LoginComponent } from './login-register-password/login/login.component';
import { RegisterComponent } from './login-register-password/register/register.component';
import { ForgotPasswordComponent } from './login-register-password/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-register-password/reset-password/reset-password.component';
import { ErrorComponent } from './utility/error/error.component';
import { UserDashboardComponent } from './dashboards/dashboard-coachee/user-dashboard/user-dashboard.component';
import { MyProfileComponent } from './dashboards/dashboard-coachee/my-profile/my-profile.component';
import { BecomeCoachComponent } from './dashboards/dashboard-coachee/become-coach/become-coach.component';
import { CoacheeSessionsComponent } from './dashboards/dashboard-coachee/coachee-sessions/coachee-sessions.component';
import { EditProfileComponent } from './dashboards/dashboard-coachee/edit-profile/edit-profile.component';
import { CoachDashboardComponent } from './dashboards/dashboard-coach/coach-dashboard/coach-dashboard.component';
import { MyCoachProfileComponent } from './dashboards/dashboard-coach/my-coach-profile/my-coach-profile.component';
import { CoachSessionsComponent } from './dashboards/dashboard-coach/coach-sessions/coach-sessions.component';
import { EditCoachComponent } from './dashboards/dashboard-coach/edit-coach/edit-coach.component';
import { AdminDashboardComponent } from './dashboards/dashboard-admin/admin-dashboard/admin-dashboard.component';
import { UserOverviewComponent } from './dashboards/dashboard-admin/user-overview/user-overview.component';
import { EditUserComponent } from './dashboards/dashboard-admin/edit-user/edit-user.component';
import { SessionRequestComponent } from './session/session-request/session-request.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { SessionOverviewComponent } from './dashboards/dashboard-admin/session-overview/session-overview.component';
import {ChangePasswordComponent} from "./dashboards/dashboard-coachee/change-password/change-password.component";
import {EditSessionComponent} from "./dashboards/dashboard-admin/edit-session/edit-session.component";
import {RequestChangeCoachingTopicComponent} from "./dashboards/dashboard-coach/request-change-coaching-topic/request-change-coaching-topic.component";
import * as authGuards from './authentication/session.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent, },
  { path: 'egg', component: EasterEggComponent, canActivate: [ authGuards.authenticated(true) ], },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'error', component: ErrorComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [ authGuards.authenticated(true) ],
    children: [
      { path: '', component: MyProfileComponent, },
      { path: 'become-coach', component: BecomeCoachComponent, },
      { path: 'coachee-sessions', component: CoacheeSessionsComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },
  {
    path: 'dashboard-coach',
    component: CoachDashboardComponent,
    canActivate: [
       authGuards.authenticated(true),
       authGuards.sessionGuard(session => session.isCoach() || session.isAdmin()),
    ],
    children: [
      { path: '', component: MyCoachProfileComponent },
      { path: 'coach-sessions', component: CoachSessionsComponent },
      { path: 'edit-coach-profile', component: EditCoachComponent },
      { path: 'request-change-topic', component: RequestChangeCoachingTopicComponent }
    ]
  },
  {
    path: 'dashboard-admin',
    component: AdminDashboardComponent,
    canActivate: [
      authGuards.authenticated(true),
      authGuards.sessionGuard(session => session.isAdmin()),
    ],
    children: [
      { path: '', component: UserOverviewComponent },
      { path: 'edit/:id', component: EditUserComponent },
      { path: 'session-overview', component: SessionOverviewComponent },
      { path: 'edit-session/:id', component: EditSessionComponent }
    ]
  },
  { path: 'user/:id', component: UserProfileComponent, canActivate: [authGuards.authenticated(true)], },
  { path: 'coaches', component: CoachOverviewComponent, canActivate: [authGuards.authenticated(true)], },
  { path: 'create-session/:id', component: SessionRequestComponent, canActivate: [authGuards.authenticated(true)], },
  { path: '**', component: PageNotFoundComponent },
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
