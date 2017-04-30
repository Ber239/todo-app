import { TestBed, inject } from '@angular/core/testing';

import { RestServiceCallService } from './rest-service-call.service';

describe('RestServiceCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestServiceCallService]
    });
  });

  it('should ...', inject([RestServiceCallService], (service: RestServiceCallService) => {
    expect(service).toBeTruthy();
  }));
});
