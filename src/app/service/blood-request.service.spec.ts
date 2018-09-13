import { TestBed, inject } from '@angular/core/testing';

import { BloodRequestService } from './blood-request.service';

describe('BloodRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodRequestService]
    });
  });

  it('should be created', inject([BloodRequestService], (service: BloodRequestService) => {
    expect(service).toBeTruthy();
  }));
});
