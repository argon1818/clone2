import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editturn2Component } from './editturn2.component';

describe('Editturn2Component', () => {
  let component: Editturn2Component;
  let fixture: ComponentFixture<Editturn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editturn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editturn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
