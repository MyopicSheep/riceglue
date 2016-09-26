import { Injectable } from '@angular/core';
import { ANNOUNCEMENTS } from './list-announcements';

@Injectable()
export class AnnouncementsService {

  constructor() { }

  getAnnouncements() {
    return Promise.resolve(ANNOUNCEMENTS);
  }

}
