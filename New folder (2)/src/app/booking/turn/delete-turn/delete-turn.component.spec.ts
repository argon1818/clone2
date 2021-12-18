import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTurnComponent } from './delete-turn.component';

describe('DeleteTurnComponent', () => {
  let component: DeleteTurnComponent;
  let fixture: ComponentFixture<DeleteTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
