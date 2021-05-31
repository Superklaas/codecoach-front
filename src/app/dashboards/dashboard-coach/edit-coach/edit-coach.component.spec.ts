import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Subject} from "rxjs";

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { UserService } from 'src/app/utility/service/user.service';
import { EditCoachComponent } from './edit-coach.component';




describe('EditCoachComponent', () => {
  let component: EditCoachComponent;
  let fixture: ComponentFixture<EditCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoachComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule,],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            getId() { return 1; }
          },
        },
        {
          provide: UserService,
          useValue: {
            get() { return new Subject(); }
          },
        },
        {
          provide: ProfileService,
          useValue: {
            currentUser$: new Subject(),
          },
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
