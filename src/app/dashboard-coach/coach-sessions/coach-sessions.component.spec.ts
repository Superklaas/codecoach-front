import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CoachSessionsComponent} from "./coach-sessions.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('CoachSessionsComponent', () => {
  let component: CoachSessionsComponent;
  let fixture: ComponentFixture<CoachSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ CoachSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
