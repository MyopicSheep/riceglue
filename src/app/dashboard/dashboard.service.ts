import { Injectable } from '@angular/core';
import { ANNOUNCEMENTS } from '../announcements/list-announcements';
import { POSTS } from '../blog/post/list-posts';
import { WEBAPPS } from '../web-apps/list-web-apps';

@Injectable()
export class DashboardService {

  constructor() { }

  getDashboardItems() {
    return Promise.resolve([ANNOUNCEMENTS, POSTS, WEBAPPS]);
  }

}
