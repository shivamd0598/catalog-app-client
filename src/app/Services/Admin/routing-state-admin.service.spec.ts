import { TestBed } from '@angular/core/testing';

import { RoutingStateAdminService } from './routing-state-admin.service';

describe('RoutingStateAdminService', () => {
  let service: RoutingStateAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingStateAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
