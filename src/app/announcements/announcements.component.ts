import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Announcement } from './announcement';
import { AnnouncementsService } from './announcements.service';
import { RgPublishDatePipe, RgReversePipe, RgSearchPipe } from '../shared';


@Component({
  moduleId: module.id,
  selector: 'rg-announcements',
  templateUrl: 'announcements.component.html',
  styleUrls: ['../blog/blog.component.css', 'announcements.component.css'],
  providers: [AnnouncementsService],
  pipes: [RgPublishDatePipe, RgReversePipe, RgSearchPipe]
})
export class AnnouncementsComponent implements OnInit {

  announcements: Announcement[];

  constructor(
    private announcementsService: AnnouncementsService,
    private titleService: Title
  ) {}

  getAnnouncements() {
    this.announcementsService.getAnnouncements().then(announcements => this.announcements = announcements);
  }

  ngOnInit() {
    this.titleService.setTitle('Announcements | The Pig and Teddy Rice Website');
    this.getAnnouncements();
  }
}
