import { TestBed } from '@angular/core/testing';

import { TeacherServiceService } from './teacher-service.service';

describe('TeacherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherServiceService = TestBed.get(TeacherServiceService);
    expect(service).toBeTruthy();
  });
});
