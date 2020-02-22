import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescriptionFormComponent } from './course-description-form.component';

describe('CourseDescriptionFormComponent', () => {
  let component: CourseDescriptionFormComponent;
  let fixture: ComponentFixture<CourseDescriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDescriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
