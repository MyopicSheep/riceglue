import { Component, Input, ViewContainerRef, OnChanges, ComponentResolver,
  ViewChild } from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'rg-include',
  templateUrl: 'rg-include.component.html',
  styleUrls: ['rg-include.component.css']
})
export class RgIncludeComponent implements OnChanges {
  @ViewChild('rgInclude', { read: ViewContainerRef })
  protected contentTarget: ViewContainerRef;
  @Input() postContent: string;

  constructor(private componentResolver: ComponentResolver) {}

  ngOnChanges() {
    let dynamicComponent = this.createContentComponent(this.postContent);
    this.componentResolver.resolveComponent(dynamicComponent)
        .then((factory: any) => this.contentTarget.createComponent(factory))
        .then((any => this.removeDuplicate()));
  }

  removeDuplicate() {
    if ($('rg-include').children().length > 1) {
      $('rg-include').children(':first').remove();
    }
  }

  createContentComponent(postContent) {
      @Component({
          selector: 'rg-include-content',
          templateUrl: postContent,
          directives: FORM_DIRECTIVES
      })
      class IncludeContentComponent {}
      return IncludeContentComponent ;
  }
}
