import { TestBed } from '@angular/core/testing';

import { MapTestService } from './map-test.service';

describe('MapTestService', () => {
  let service: MapTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
