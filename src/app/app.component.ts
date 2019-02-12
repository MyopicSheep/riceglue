import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
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
  constructor(public router:Router) {
 
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
                    (<any>window).dataLayer.push({
                        event: 'viewDestination',
                        action: event.urlAfterRedirects,
                    });
                }
            });
    }

  ngOnInit() {
    let documentHeight = jQuery(document).height();
    jQuery('nav').height(documentHeight);
  }
}
