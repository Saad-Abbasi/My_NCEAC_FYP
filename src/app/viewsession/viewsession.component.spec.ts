import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsessionComponent } from './viewsession.component';

describe('ViewsessionComponent', () => {
  let component: ViewsessionComponent;
  let fixture: ComponentFixture<ViewsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
