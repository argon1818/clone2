import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTurnComponent } from './add-turn.component';

describe('AddTurnComponent', () => {
  let component: AddTurnComponent;
  let fixture: ComponentFixture<AddTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
