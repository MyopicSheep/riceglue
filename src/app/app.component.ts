import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RgCopyright } from './rg-copyright.directive';
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'rg-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, RgCopyright]
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    let documentHeight = jQuery(document).height();
    jQuery('nav').height(documentHeight);
  }
}
