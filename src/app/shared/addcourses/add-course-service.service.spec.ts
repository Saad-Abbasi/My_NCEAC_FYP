import { TestBed } from '@angular/core/testing';

import { AddCourseServiceService } from './add-course-service.service';

describe('AddCourseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCourseServiceService = TestBed.get(AddCourseServiceService);
    expect(service).toBeTruthy();
  });
});
