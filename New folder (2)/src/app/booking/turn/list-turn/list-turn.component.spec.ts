import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurnComponent } from './list-turn.component';

describe('ListTurnComponent', () => {
  let component: ListTurnComponent;
  let fixture: ComponentFixture<ListTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
