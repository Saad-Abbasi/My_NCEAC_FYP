import { TestBed } from '@angular/core/testing';

import { BookserviceService } from './bookservice.service';

describe('BookserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookserviceService = TestBed.get(BookserviceService);
    expect(service).toBeTruthy();
  });
});
