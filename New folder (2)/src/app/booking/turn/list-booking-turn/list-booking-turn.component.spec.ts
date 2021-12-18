import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingTurnComponent } from './list-booking-turn.component';

describe('ListBookingTurnComponent', () => {
  let component: ListBookingTurnComponent;
  let fixture: ComponentFixture<ListBookingTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookingTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookingTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
