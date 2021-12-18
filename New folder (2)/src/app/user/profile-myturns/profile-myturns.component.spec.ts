import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyturnsComponent } from './profile-myturns.component';

describe('ProfileMyturnsComponent', () => {
  let component: ProfileMyturnsComponent;
  let fixture: ComponentFixture<ProfileMyturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMyturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
