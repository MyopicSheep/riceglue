import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rg-not-found',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NotFoundComponent implements OnInit {
  
  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('404 | The Pig and Teddy Rice Website');
    this.router.navigate(['/404']);
  }

}
