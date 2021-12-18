import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssignroleComponent } from './manage-assignrole.component';

describe('ManageAssignroleComponent', () => {
  let component: ManageAssignroleComponent;
  let fixture: ComponentFixture<ManageAssignroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAssignroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssignroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
