import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicatinUserdashboardComponent } from './communicatin-userdashboard.component';

describe('CommunicatinUserdashboardComponent', () => {
  let component: CommunicatinUserdashboardComponent;
  let fixture: ComponentFixture<CommunicatinUserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicatinUserdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicatinUserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
