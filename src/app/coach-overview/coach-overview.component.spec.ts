import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { UserService } from '../utility/service/user.service';

import { CoachOverviewComponent } from './coach-overview.component';

describe('CoachOverviewComponent', () => {
  let component: CoachOverviewComponent;
  let fixture: ComponentFixture<CoachOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachOverviewComponent ],
      providers: [
        {provide: UserService,
        useValue: {
          getAllCoaches() {
            return new Subject();
          }
        }}
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
