import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyhealthRecordComponent } from './profile-myhealth-record.component';

describe('ProfileMyhealthRecordComponent', () => {
  let component: ProfileMyhealthRecordComponent;
  let fixture: ComponentFixture<ProfileMyhealthRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMyhealthRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyhealthRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
