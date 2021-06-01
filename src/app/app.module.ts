import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS,  HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AuthenticationInterceptor} from './authentication/authentication.interceptor';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CoachOverviewComponent } from './find-a-coach/coach-overview/coach-overview.component';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { DropdownComponent } from './layout/dropdown/dropdown.component';
import { LoginComponent } from './login-register-password/login/login.component';
import { RegisterComponent } from './login-register-password/register/register.component';
import { MyProfileComponent } from './dashboards/dashboard-coachee/my-profile/my-profile.component';
import { UserDashboardComponent } from './dashboards/dashboard-coachee/user-dashboard/user-dashboard.component';
import { UserMenuComponent } from './layout/user-menu/user-menu.component';
import { BecomeCoachComponent } from './dashboards/dashboard-coachee/become-coach/become-coach.component';
import { SessionRequestComponent } from './session/session-request/session-request.component';
import { CoachDashboardComponent } from './dashboards/dashboard-coach/coach-dashboard/coach-dashboard.component';
import { MyCoachProfileComponent } from './dashboards/dashboard-coach/my-coach-profile/my-coach-profile.component';
import { CoacheeSessionsComponent } from './dashboards/dashboard-coachee/coachee-sessions/coachee-sessions.component';
import { CoachSessionsComponent } from './dashboards/dashboard-coach/coach-sessions/coach-sessions.component';
import { RemoveUnderscorePipe } from './utility/pipe/remove-underscore.pipe';
import { ForgotPasswordComponent } from './login-register-password/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-register-password/reset-password/reset-password.component';
import { EditProfileComponent } from './dashboards/dashboard-coachee/edit-profile/edit-profile.component';
import { SessionListItemComponent } from './session/session-list/session-list-item/session-list-item.component';
import { CommonSessionDetailsComponent } from './session/session-list/common-session-details/common-session-details.component';
import { RequestedCoachSessionDetailsComponent } from './session/session-list/requested-coach-session-details/requested-coach-session-details.component';
import { WaitingFeedbackCoachSessionDetailsComponent } from './session/session-list/waiting-feedback-coach-session-details/waiting-feedback-coach-session-details.component';
import { WaitingFeedbackCoacheeSessionDetailsComponent } from './session/session-list/waiting-feedback-coachee-session-details/waiting-feedback-coachee-session-details.component';
import { CoachFeedbackFormComponent } from './session/session-list/coach-feedback-form/coach-feedback-form.component';
import { SmileySelectorComponent } from './session/session-list/smiley-selector/smiley-selector.component';
import { CoacheeFeedbackFormComponent } from './session/session-list/coachee-feedback-form/coachee-feedback-form.component';
import { AdminDashboardComponent } from './dashboards/dashboard-admin/admin-dashboard/admin-dashboard.component';
import { UserOverviewComponent } from './dashboards/dashboard-admin/user-overview/user-overview.component';
import { EditUserComponent } from './dashboards/dashboard-admin/edit-user/edit-user.component';
import { CancellableSessionDetailsComponent } from './session/session-list/cancellable-session-details/cancellable-session-details.component';
import { FeedbackReceivedDetailsComponent } from './session/session-list/feedback-received-details/feedback-received-details.component';
import { EditCoachComponent } from './dashboards/dashboard-coach/edit-coach/edit-coach.component';
import { CoachingTopicsEditorComponent } from './dashboards/dashboard-coach/coaching-topics-editor/coaching-topics-editor.component';
import { ErrorComponent } from './utility/error/error.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { TopicFilterComponent } from './find-a-coach/topic-filter/topic-filter.component';
import { SessionOverviewComponent} from "./dashboards/dashboard-admin/session-overview/session-overview.component";
import {ChangePasswordComponent} from "./dashboards/dashboard-coachee/change-password/change-password.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    RegisterComponent,
    UserProfileComponent,
    MyProfileComponent,
    UserDashboardComponent,
    UserMenuComponent,
    CoachOverviewComponent,
    UserDashboardComponent,
    BecomeCoachComponent,
    SessionRequestComponent,
    CoachDashboardComponent,
    MyCoachProfileComponent,
    CoacheeSessionsComponent,
    CoachSessionsComponent,
    RemoveUnderscorePipe,
    EasterEggComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EditProfileComponent,
    SessionListItemComponent,
    CommonSessionDetailsComponent,
    RequestedCoachSessionDetailsComponent,
    WaitingFeedbackCoachSessionDetailsComponent,
    WaitingFeedbackCoacheeSessionDetailsComponent,
    CoachFeedbackFormComponent,
    SmileySelectorComponent,
    CoacheeFeedbackFormComponent,
    RequestedCoachSessionDetailsComponent,
    AdminDashboardComponent,
    UserOverviewComponent,
    EditUserComponent,
    CancellableSessionDetailsComponent,
    DropdownComponent,
    FeedbackReceivedDetailsComponent,
    EditCoachComponent,
    CoachingTopicsEditorComponent,
    ErrorComponent,
    PageNotFoundComponent,
    TopicFilterComponent,
    SessionOverviewComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
