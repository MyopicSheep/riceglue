/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WebAppsService } from './web-apps.service';

describe('Service: WebApps', () => {
  beforeEach(() => {
    addProviders([WebAppsService]);
  });

  it('should ...',
    inject([WebAppsService],
      (service: WebAppsService) => {
        expect(service).toBeTruthy();
      }));
});
