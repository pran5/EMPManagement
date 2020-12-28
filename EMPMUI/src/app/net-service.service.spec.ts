import { TestBed } from '@angular/core/testing';

import { NetServiceService } from './net-service.service';

describe('NetServiceService', () => {
  let service: NetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
