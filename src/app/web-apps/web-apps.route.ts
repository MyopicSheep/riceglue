import { RouterConfig }  from '@angular/router';
import { WebAppsComponent } from './web-apps.component';

export const webAppsRoute: RouterConfig = [
  {
    path: 'projects',
    component: WebAppsComponent
  }
];
