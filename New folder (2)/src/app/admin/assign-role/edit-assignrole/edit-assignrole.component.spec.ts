import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignroleComponent } from './edit-assignrole.component';

describe('EditAssignroleComponent', () => {
  let component: EditAssignroleComponent;
  let fixture: ComponentFixture<EditAssignroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssignroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssignroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
