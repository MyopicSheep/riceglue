import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RgListMouseover } from '../rg-list-mouseover.directive';
import { RgBlogMouseover } from '../rg-blog-mouseover.directive';
import { DashboardService } from './dashboard.service';
import { RgPublishDatePipe, RgReversePipe } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rg-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [
    '../blog/blog.component.css',
    '../web-apps/web-apps.component.css',
    '../announcements/announcements.component.css',
    'dashboard.component.css'
  ],
  directives: [RgListMouseover, RgBlogMouseover],
  providers: [DashboardService],
  pipes: [RgPublishDatePipe, RgReversePipe]
})
export class DashboardComponent implements OnInit {
  
  items: any[];

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private titleService: Title
   ) {}

  getDashboardItems() {
    this.dashboardService.getDashboardItems().then(items => this.items = items);
  }

  ngOnInit() {
    this.router.navigate(['/dashboard']);
    this.titleService.setTitle('Dashboard | The Pig and Teddy Rice Website');
    this.getDashboardItems();
  }

  onSelect(item: any) {

    if (item.hasOwnProperty('category')) { // blog post
      let link = ['/blog', item.year, item.month, item.title.toLowerCase().replace(/\s/g, '-')];
      this.router.navigate(link);
    } else if (item.hasOwnProperty('id')) { // doodle
      let link = ['/doodles', item.title.toLowerCase().replace(/\s/g, '-')];
      this.router.navigate(link);
    } else {
      // do nothing
    }
  }

}
