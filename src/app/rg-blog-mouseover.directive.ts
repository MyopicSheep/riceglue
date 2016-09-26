import { Directive, ElementRef, HostListener } from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[rgBlogMouseover]'
})
export class RgBlogMouseover {
  private el: HTMLElement;
  private touch_pos: any;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('touchstart', ['$event']) onTouchStart(event) {
    this.touch_pos = jQuery(window).scrollTop();
  }

  @HostListener('touchend', ['$event']) onTouchEnd(event) {
    if (Math.abs(this.touch_pos - jQuery(window).scrollTop()) < 3) {
      if (jQuery(this.el).hasClass('hover')) {
        return true;
      } else {
        jQuery(this.el).addClass('hover');
        jQuery(this.el).css({'border': '1px solid #ccc'});
        jQuery(this.el).find('.title').stop().animate({
          marginTop: 0,
          marginBottom: 0
        }, 200);
        jQuery(this.el).find('.excerpt').stop().animate({
          marginTop: 0,
          marginBottom: 0,
          opacity: 1
        }, 200);
        let others = jQuery('.touch-click').not(this.el);
        jQuery(others).removeClass('hover');
        jQuery(others).css({'border': '1px solid #eee'});
        jQuery(others).find('.title').stop().animate({
          marginTop: '0.2em',
          marginBottom: '-0.2em'
        }, 100);
        jQuery(others).find('.excerpt').stop().animate({
          marginTop: '1em',
          marginBottom: '-1em',
          opacity: 0
        }, 100);
        event.preventDefault();
        return false;
      }
    }
  }
}
