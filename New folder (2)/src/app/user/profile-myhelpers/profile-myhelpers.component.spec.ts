import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyhelpersComponent } from './profile-myhelpers.component';

describe('ProfileMyhelpersComponent', () => {
  let component: ProfileMyhelpersComponent;
  let fixture: ComponentFixture<ProfileMyhelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMyhelpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyhelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
