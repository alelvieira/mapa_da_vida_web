import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';

describe('PlaceService', () => {
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
