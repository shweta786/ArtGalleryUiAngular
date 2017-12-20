import { TestBed, inject } from '@angular/core/testing';

import { paintingService } from './painting.service';

describe('paintingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [paintingService]
    });
  });

  it('should be created', inject([paintingService], (service: paintingService) => {
    expect(service).toBeTruthy();
  }));
});
