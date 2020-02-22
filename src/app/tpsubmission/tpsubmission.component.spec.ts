import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsubmissionComponent } from './tpsubmission.component';

describe('TpsubmissionComponent', () => {
  let component: TpsubmissionComponent;
  let fixture: ComponentFixture<TpsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
