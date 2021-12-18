import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypevisitComponent } from './add-typevisit.component';

describe('AddTypevisitComponent', () => {
  let component: AddTypevisitComponent;
  let fixture: ComponentFixture<AddTypevisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypevisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
