import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rg-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent implements OnInit {
  title = 'About';

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('About | The Pig and Teddy Rice Website');
    this.router.navigate(['/about']);
  }

}
