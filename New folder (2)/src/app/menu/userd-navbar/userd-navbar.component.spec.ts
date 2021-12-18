import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdNavbarComponent } from './userd-navbar.component';

describe('UserdNavbarComponent', () => {
  let component: UserdNavbarComponent;
  let fixture: ComponentFixture<UserdNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
