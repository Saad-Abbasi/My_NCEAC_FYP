import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TperformaComponent } from './tperforma.component';

describe('TperformaComponent', () => {
  let component: TperformaComponent;
  let fixture: ComponentFixture<TperformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TperformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TperformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
