import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderhealthComponent } from './calenderhealth.component';

describe('CalenderhealthComponent', () => {
  let component: CalenderhealthComponent;
  let fixture: ComponentFixture<CalenderhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderhealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
