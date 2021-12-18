import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubspecialtyComponent } from './edit-subspecialty.component';

describe('EditSubspecialtyComponent', () => {
  let component: EditSubspecialtyComponent;
  let fixture: ComponentFixture<EditSubspecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubspecialtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubspecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
