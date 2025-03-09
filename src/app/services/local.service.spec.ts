import { TestBed } from '@angular/core/testing';

import { LocaisService } from './local.service';

describe('PlaceService', () => {
  let service: LocaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
