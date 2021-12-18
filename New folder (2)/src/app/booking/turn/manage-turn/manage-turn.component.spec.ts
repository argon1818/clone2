import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTurnComponent } from './manage-turn.component';

describe('ManageTurnComponent', () => {
  let component: ManageTurnComponent;
  let fixture: ComponentFixture<ManageTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
