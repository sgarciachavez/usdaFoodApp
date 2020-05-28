import { TestBed } from '@angular/core/testing';

import { ServiceUsdaService } from './service-usda.service';

describe('ServiceUsdaService', () => {
  let service: ServiceUsdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUsdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
