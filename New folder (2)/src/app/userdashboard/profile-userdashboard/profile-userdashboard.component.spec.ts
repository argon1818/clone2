import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserdashboardComponent } from './profile-userdashboard.component';

describe('ProfileUserdashboardComponent', () => {
  let component: ProfileUserdashboardComponent;
  let fixture: ComponentFixture<ProfileUserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
