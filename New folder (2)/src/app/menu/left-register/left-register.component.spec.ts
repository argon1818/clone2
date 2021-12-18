import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRegisterComponent } from './left-register.component';

describe('LeftRegisterComponent', () => {
  let component: LeftRegisterComponent;
  let fixture: ComponentFixture<LeftRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
