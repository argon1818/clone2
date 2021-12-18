import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignroleComponent } from './add-assignrole.component';

describe('AddAssignroleComponent', () => {
  let component: AddAssignroleComponent;
  let fixture: ComponentFixture<AddAssignroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssignroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
