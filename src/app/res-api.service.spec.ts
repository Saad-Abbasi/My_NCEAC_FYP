import { TestBed } from '@angular/core/testing';

import { ResApiService } from './res-api.service';

describe('ResApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResApiService = TestBed.get(ResApiService);
    expect(service).toBeTruthy();
  });
});
