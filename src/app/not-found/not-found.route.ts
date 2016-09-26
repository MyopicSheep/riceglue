import { RouterConfig }  from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const notFoundRoute: RouterConfig = [
  {
    path: '404',
    component: NotFoundComponent
  }
];
