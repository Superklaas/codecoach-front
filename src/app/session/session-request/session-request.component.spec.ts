import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { SessionRequestComponent } from './session-request.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ErrorService } from 'src/app/utility/service/error.service';

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
      providers: [
        {
        provide: AuthenticationService, useValue: {getId(){ return 1 }}
        }, {
          provide: ErrorService,
          useValue: {},
        }
      ]
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
