import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnuserdashboardComponent } from './turnuserdashboard.component';

describe('TurnuserdashboardComponent', () => {
  let component: TurnuserdashboardComponent;
  let fixture: ComponentFixture<TurnuserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnuserdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnuserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
