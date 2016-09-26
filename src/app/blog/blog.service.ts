import { Injectable } from '@angular/core';
import { POSTS } from './post/list-posts';


@Injectable()
export class BlogService {

  constructor() { }

  getPosts() {
    return Promise.resolve(POSTS);
  }

  getPost(year: number, month: number, title: string) {
    return this.getPosts()
      .then(posts => posts.find(post => post.year === year && post.month === month && post.title.toLowerCase() === title));
  }

  findPost(rank: number) {
    return this.getPosts().then(posts => posts.find(post => post.rank === rank));
  }

}
