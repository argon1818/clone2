import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalrecordUserdashboardComponent } from './medicalrecord-userdashboard.component';

describe('MedicalrecordUserdashboardComponent', () => {
  let component: MedicalrecordUserdashboardComponent;
  let fixture: ComponentFixture<MedicalrecordUserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalrecordUserdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalrecordUserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
