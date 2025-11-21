import { TestBed } from '@angular/core/testing';

import { CokkieService } from './cokkie-service';

describe('CokkieService', () => {
  let service: CokkieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CokkieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
