import { TestBed } from '@angular/core/testing';

import { DescriptioncommserviceService } from './descriptioncommservice.service';

describe('DescriptioncommserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescriptioncommserviceService = TestBed.get(DescriptioncommserviceService);
    expect(service).toBeTruthy();
  });
});
