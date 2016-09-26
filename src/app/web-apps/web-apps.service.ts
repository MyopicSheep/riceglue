import { Injectable } from '@angular/core';
import { WEBAPPS } from './list-web-apps';

@Injectable()
export class WebAppsService {

  constructor() { }

  getWebApps() {
    return Promise.resolve(WEBAPPS);
  }

}
