import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedOnlyComponent } from './authenticated-only.component';

describe('AuthenticatedOnlyComponent', () => {
  let component: AuthenticatedOnlyComponent;
  let fixture: ComponentFixture<AuthenticatedOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatedOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
