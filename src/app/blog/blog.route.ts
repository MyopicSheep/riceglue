import { RouterConfig }  from '@angular/router';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

export const blogRoute: RouterConfig = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:year/:month/:title',
    component: PostComponent
  }
];
