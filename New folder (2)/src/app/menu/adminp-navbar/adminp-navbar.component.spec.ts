import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpNavbarComponent } from './adminp-navbar.component';

describe('AdminpNavbarComponent', () => {
  let component: AdminpNavbarComponent;
  let fixture: ComponentFixture<AdminpNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
