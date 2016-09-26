/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';

describe('Service: Dashboard', () => {
  beforeEach(() => {
    addProviders([DashboardService]);
  });

  it('should ...',
    inject([DashboardService],
      (service: DashboardService) => {
        expect(service).toBeTruthy();
      }));
});
