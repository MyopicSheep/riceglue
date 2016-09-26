/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AnnouncementsService } from './announcements.service';

describe('Service: Announcements', () => {
  beforeEach(() => {
    addProviders([AnnouncementsService]);
  });

  it('should ...',
    inject([AnnouncementsService],
      (service: AnnouncementsService) => {
        expect(service).toBeTruthy();
      }));
});
