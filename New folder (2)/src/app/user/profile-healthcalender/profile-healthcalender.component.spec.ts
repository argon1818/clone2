import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHealthcalenderComponent } from './profile-healthcalender.component';

describe('ProfileHealthcalenderComponent', () => {
  let component: ProfileHealthcalenderComponent;
  let fixture: ComponentFixture<ProfileHealthcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHealthcalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHealthcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
