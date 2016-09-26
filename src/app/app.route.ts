import { provideRouter, RouterConfig }  from '@angular/router';
import { blogRoute } from './blog/blog.route';
import { webAppsRoute } from './web-apps/web-apps.route';
import { announcementsRoute } from './announcements/announcements.route';
import { dashboardRoute } from './dashboard/dashboard.route';
import { notFoundRoute } from './not-found/not-found.route';

const routes: RouterConfig = [
  ...blogRoute,
  ...webAppsRoute,
  ...announcementsRoute,
  ...dashboardRoute,
  ...notFoundRoute,
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }

];

export const appRouterProviders = [
  provideRouter(routes)
];
