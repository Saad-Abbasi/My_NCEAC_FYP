import { TestBed } from '@angular/core/testing';

import { TopicServiceService } from './topic-service.service';

describe('TopicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicServiceService = TestBed.get(TopicServiceService);
    expect(service).toBeTruthy();
  });
});
