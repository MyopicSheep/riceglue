import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { PostComponent } from './post/post.component';
import { Post } from './post/post';
import { BlogService } from './blog.service';
import { RgPublishDatePipe, RgReversePipe, RgSearchPipe } from '../shared';
import { RgBlogMouseover } from '../rg-blog-mouseover.directive';

@Component({
  moduleId: module.id,
  selector: 'rg-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  directives: [ROUTER_DIRECTIVES, RgBlogMouseover],
  providers: [BlogService],
  precompile: [PostComponent],
  pipes: [ RgPublishDatePipe, RgReversePipe, RgSearchPipe ]
})

export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(
    private router: Router,
    private blogService: BlogService,
    private titleService: Title
  ) {}

  getPosts() {
    this.blogService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.router.navigate(['/blog']);
    this.titleService.setTitle('Blog | The Pig and Teddy Rice Website');
    this.getPosts();
  }

  gotoSelect(post: Post) {
    let link = ['/blog', post.year, post.month, post.title.toLowerCase().replace(/\s/g, '-')];
    this.router.navigate(link);
  }
}
