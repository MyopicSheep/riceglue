import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RgIncludeComponent } from '../../rg-include/rg-include.component';
import { BlogService } from '../blog.service';
import { Post } from './post';
import { RgPublishDatePipe, RgReversePipe } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'rg-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
  providers: [BlogService],
  directives: [RgIncludeComponent],
  pipes: [RgPublishDatePipe, RgReversePipe]
})

export class PostComponent implements OnInit, OnDestroy {
  private posts: Post[];
  private post: Post;
  private nextPost: Post;
  private prevPost: Post;
  private sub: any;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  next() {
    this.blogService.findPost(this.post.rank + 1).then(post => this.nextPost = post);
  }

  prev() {
    this.blogService.findPost(this.post.rank - 1).then(post => this.prevPost = post);
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let t = 'title';
      let m = 'month';
      let y = 'year';
      let title = params[t].toLowerCase().replace(/\-/g, ' ');
      let month = +params[m];
      let year = +params[y];
      this.blogService.getPost(year, month, title)
        .then(post => this.post = post).then(post => this.next()).then(post => this.prev())
        .then(post => this.titleService.setTitle(this.post.title + ' | The Pig and Teddy Rice Website'));
    });
    this.blogService.getPosts().then(posts => this.posts = posts);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goMain() {
    let link = ['/blog'];
    this.router.navigate(link);
  }

  goBack() {
    window.history.back();
  }

  afterPostTitle() {
    if (this.nextPost) {
      return this.nextPost.title + ' > ';
    } else {
      return 'You\'re on the last post.';
    }
  }

  prevPostTitle() {
    if (this.prevPost) {
      return ' < ' + this.prevPost.title;
    } else {
      return 'You\'re on the first post.';
    }
  }

  after(post: Post) {
    if (post.rank === this.posts.length) {
      return;
    }
    let link = ['/blog', this.nextPost.year, this.nextPost.month, this.nextPost.title.toLowerCase().replace(/\s/g, '-')];
    this.router.navigate(link);
  }

  previous(post: Post) {
    if (post.rank === 1) {
      return;
    }
    let link = ['/blog', this.prevPost.year, this.prevPost.month, this.prevPost.title.toLowerCase().replace(/\s/g, '-')];
    this.router.navigate(link);
  }
}
