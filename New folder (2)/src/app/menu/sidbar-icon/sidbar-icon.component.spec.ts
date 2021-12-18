import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarIconComponent } from './sidbar-icon.component';

describe('SidbarIconComponent', () => {
  let component: SidbarIconComponent;
  let fixture: ComponentFixture<SidbarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidbarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidbarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
