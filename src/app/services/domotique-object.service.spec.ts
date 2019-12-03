import { TestBed } from '@angular/core/testing';

import { DomotiqueObjectService } from './domotique-object.service';

describe('DomotiqueObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomotiqueObjectService = TestBed.get(DomotiqueObjectService);
    expect(service).toBeTruthy();
  });
});
