import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidbar3Component } from './sidbar3.component';

describe('Sidbar3Component', () => {
  let component: Sidbar3Component;
  let fixture: ComponentFixture<Sidbar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidbar3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidbar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
