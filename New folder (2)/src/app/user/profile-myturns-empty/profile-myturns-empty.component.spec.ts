import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyturnsEmptyComponent } from './profile-myturns-empty.component';

describe('ProfileMyturnsEmptyComponent', () => {
  let component: ProfileMyturnsEmptyComponent;
  let fixture: ComponentFixture<ProfileMyturnsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMyturnsEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyturnsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
