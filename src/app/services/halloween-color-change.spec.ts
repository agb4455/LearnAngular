import { TestBed } from '@angular/core/testing';

import { HalloweenColorChange } from './halloween-color-change';

describe('HalloweenColorChange', () => {
  let service: HalloweenColorChange;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalloweenColorChange);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
