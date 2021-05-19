import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRequestComponent } from './session-request.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {AuthenticationService} from "../authentication/authentication.service";

describe('SessionRequestComponent', () => {
  let component: SessionRequestComponent;
  let fixture: ComponentFixture<SessionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule],
      declarations: [ SessionRequestComponent ],
      providers: [{provide: AuthenticationService, useValue: {getId(){ return 1 }}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
