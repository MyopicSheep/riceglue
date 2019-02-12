import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'rg-privacy',
  templateUrl: 'privacy.component.html',
  styleUrls: ['privacy.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class PrivacyComponent implements OnInit {
  title = 'Privacy';

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Privacy | The Pig and Teddy Rice Website');
    this.router.navigate(['/privacy']);
  }

}

