import { TestBed } from '@angular/core/testing';

import { RestaurantsApiService } from './restaurants-api.service';

describe('RestaurantsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantsApiService = TestBed.get(RestaurantsApiService);
    expect(service).toBeTruthy();
  });
});
