import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RgListMouseover } from '../rg-list-mouseover.directive';
import { WebApp } from './web-app';
import { WebAppsService } from './web-apps.service';
import { RgPublishDatePipe, RgReversePipe, RgSearchPipe, RgTypePipe } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rg-web-apps',
  templateUrl: 'web-apps.component.html',
  styleUrls: ['web-apps.component.css'],
  directives: [RgListMouseover],
  providers: [WebAppsService],
  pipes: [RgPublishDatePipe, RgReversePipe, RgSearchPipe, RgTypePipe]
})

export class WebAppsComponent implements OnInit {
  
  description = 'Ideas and theories brought to life. Practical application of machine learning, artificial intelligence, probability, and more.';

  webapps: WebApp[];

  constructor(private webAppsService: WebAppsService, private titleService: Title) { }

  getWebApps() {
    this.webAppsService.getWebApps().then(webapps => this.webapps = webapps);
  }

  ngOnInit() {
    this.titleService.setTitle('Projects | The Pig and Teddy Rice Website');
    this.getWebApps();
  }

}
