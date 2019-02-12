import { Directive, ElementRef } from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[rgCopyright]'
})

export class RgCopyright {

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    let copyrightDetails = '&nbsp; PigandShrub.com. All Rights Reserved.';
    let d = new Date();
    let currYear = d.getFullYear();
    if (currYear > 2016) {
      jQuery(this.el).html('Copyright &copy; 2016-' + currYear + copyrightDetails);
    } else {
      jQuery(this.el).html('Copyright &copy; 2016' + copyrightDetails);
    }
  }

}
