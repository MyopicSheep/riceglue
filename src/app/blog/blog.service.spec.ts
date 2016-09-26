/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BlogService } from './blog.service';

describe('Service: Blog', () => {
  beforeEach(() => {
    addProviders([BlogService]);
  });

  it('should ...',
    inject([BlogService],
      (service: BlogService) => {
        expect(service).toBeTruthy();
      }));
});
