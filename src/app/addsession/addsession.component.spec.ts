import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsessionComponent } from './addsession.component';

describe('AddsessionComponent', () => {
  let component: AddsessionComponent;
  let fixture: ComponentFixture<AddsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
