import { TestBed } from '@angular/core/testing';

import { RoutingStateUserService } from './routing-state-user.service';

describe('RoutingStateUserService', () => {
  let service: RoutingStateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingStateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
