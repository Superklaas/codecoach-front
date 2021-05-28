import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AuthenticationInterceptor} from './authentication/authentication.interceptor';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MyProfileComponent } from './dashboard/my-profile/my-profile.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { CoachOverviewComponent } from './coach-overview/coach-overview.component';
import { BecomeCoachComponent } from './dashboard/become-coach/become-coach.component';
import { SessionRequestComponent } from './session-request/session-request.component';
import { CoachDashboardComponent } from './dashboard-coach/coach-dashboard/coach-dashboard.component';
import { MyCoachProfileComponent } from './dashboard-coach/my-coach-profile/my-coach-profile.component';
import { CoacheeSessionsComponent } from './dashboard/coachee-sessions/coachee-sessions.component';
import { CoachSessionsComponent } from './dashboard-coach/coach-sessions/coach-sessions.component';
import { RemoveUnderscorePipe } from './pipe/remove-underscore.pipe';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { SessionListItemComponent } from './session-list/session-list-item/session-list-item.component';
import { CommonSessionDetailsComponent } from './session-list/common-session-details/common-session-details.component';
import { RequestedCoachSessionDetailsComponent } from './session-list/requested-coach-session-details/requested-coach-session-details.component';
import { EditCoachingTopicsComponent } from './dashboard-coach/edit-coaching-topics/edit-coaching-topics.component';
import { WaitingFeedbackCoachSessionDetailsComponent } from './session-list/waiting-feedback-coach-session-details/waiting-feedback-coach-session-details.component';
import { CoachFeedbackFormComponent } from './session-list/coach-feedback-form/coach-feedback-form.component';
import { SmileySelectorComponent } from './session-list/smiley-selector/smiley-selector.component';
import {WaitingFeedbackCoacheeSessionDetailsComponent } from "./session-list/waiting-feedback-coachee-session-details/waiting-feedback-coachee-session-details.component";
import { CoacheeFeedbackFormComponent } from './session-list/coachee-feedback-form/coachee-feedback-form.component';
import { AdminDashboardComponent } from './dashboard-admin/admin-dashboard/admin-dashboard.component';
import { UserOverviewComponent } from './dashboard-admin/user-overview/user-overview.component';
import { EditUserComponent } from './dashboard-admin/edit-user/edit-user.component';
import { CancellableSessionDetailsComponent } from './session-list/cancellable-session-details/cancellable-session-details.component';
import { DropdownComponent } from './layout/dropdown/dropdown.component';
import { EditCoachComponent } from './dashboard-coach/edit-coach/edit-coach.component';
import { CoachingTopicsEditorComponent } from './dashboard-coach/coaching-topics-editor/coaching-topics-editor.component';
import { FeedbackReceivedDetailsComponent } from './session-list/feedback-received-details/feedback-received-details.component';
import { ErrorComponent } from './error/error.component';

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
    SmileySelectorComponent,
    CoacheeFeedbackFormComponent,
    RequestedCoachSessionDetailsComponent,
    EditCoachingTopicsComponent,
    AdminDashboardComponent,
    UserOverviewComponent,
    EditUserComponent,
    CancellableSessionDetailsComponent,
    DropdownComponent,
    FeedbackReceivedDetailsComponent,
    EditCoachComponent,
    CoachingTopicsEditorComponent,
    ErrorComponent,
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
