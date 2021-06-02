import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import { UserMenuComponent } from './user-menu.component';
import {ProfileService} from "../../utility/service/profile.service";

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMenuComponent ],
      imports:[HttpClientTestingModule, RouterModule,  RouterTestingModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
              session$: new Subject(),
          }
        },
        {
          provide: RolePersonalisationService,
          useValue: {
            color: 'yellow darken-2'
          }
        },
        {
          provide: ProfileService,
          useValue: {}
        }
      ]
    })
    .compileComponents();
    TestBed.inject(RolePersonalisationService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
