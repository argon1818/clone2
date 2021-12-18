import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsecretaryComponent } from './listsecretary.component';

describe('ListsecretaryComponent', () => {
  let component: ListsecretaryComponent;
  let fixture: ComponentFixture<ListsecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
