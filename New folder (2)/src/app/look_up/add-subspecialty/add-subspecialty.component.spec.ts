import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubspecialtyComponent } from './add-subspecialty.component';

describe('AddSubspecialtyComponent', () => {
  let component: AddSubspecialtyComponent;
  let fixture: ComponentFixture<AddSubspecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubspecialtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubspecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
