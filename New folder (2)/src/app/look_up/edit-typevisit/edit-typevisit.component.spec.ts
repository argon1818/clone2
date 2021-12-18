import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypevisitComponent } from './edit-typevisit.component';

describe('EditTypevisitComponent', () => {
  let component: EditTypevisitComponent;
  let fixture: ComponentFixture<EditTypevisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypevisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
