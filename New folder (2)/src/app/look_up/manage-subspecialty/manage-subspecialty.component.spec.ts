import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubspecialtyComponent } from './manage-subspecialty.component';

describe('ManageSubspecialtyComponent', () => {
  let component: ManageSubspecialtyComponent;
  let fixture: ComponentFixture<ManageSubspecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubspecialtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubspecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
