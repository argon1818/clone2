import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactsEmptyComponent } from './profile-contacts-empty.component';

describe('ProfileContactsEmptyComponent', () => {
  let component: ProfileContactsEmptyComponent;
  let fixture: ComponentFixture<ProfileContactsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContactsEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
