import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTypevisitComponent } from './manage-typevisit.component';

describe('ManageTypevisitComponent', () => {
  let component: ManageTypevisitComponent;
  let fixture: ComponentFixture<ManageTypevisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTypevisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTypevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
