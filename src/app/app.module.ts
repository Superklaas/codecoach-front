import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    CoachSessionsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
