import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealpersuserdashboardComponent } from './healpersuserdashboard.component';

describe('HealpersuserdashboardComponent', () => {
  let component: HealpersuserdashboardComponent;
  let fixture: ComponentFixture<HealpersuserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealpersuserdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealpersuserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
