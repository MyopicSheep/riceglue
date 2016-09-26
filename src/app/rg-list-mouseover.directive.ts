import { Directive, ElementRef, HostListener } from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[rgListMouseover]'
})
export class RgListMouseover {
  private el: HTMLElement;
  private touch_pos: any;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    let w = jQuery(this.el).innerWidth() - 50;
    let h = jQuery(this.el).innerHeight() - 50;
    jQuery(this.el).find('.item').css({
      'border': '1px solid rgba(0, 0, 0, 0.09)'});
    jQuery(this.el).find('.item').stop().animate({
      backgroundPositionX: '40%'
    }, 500);
    jQuery(this.el).find('.veil').stop().animate({
      opacity: '0.6'
    }, 500);
    jQuery(this.el).find('.vert').stop().animate({
      height: h + 'px'
    }, 500);
    jQuery(this.el).find('.horz').stop().animate({
      width: w + 'px'
    }, 500);
    jQuery(this.el).find('.item-name').stop().animate({
      marginTop: '-0.2em'
    }, 500);
    jQuery(this.el).find('.desc').stop().animate({
      opacity: 1,
      marginTop: '0'
    }, 500);
  }

  @HostListener('mouseleave') onMouseLeave() {
    jQuery(this.el).find('.item').css({
      'border': '1px solid rgba(0, 0, 0, 0.05)'});
    jQuery(this.el).find('.item').stop().animate({
      backgroundPositionX: '20%'
    }, 300);
    jQuery(this.el).find('.veil').stop().animate({
      opacity: '0.05'
    }, 300);
    jQuery(this.el).find('.vert').stop().animate({
      height: '0'
    }, 300);
    jQuery(this.el).find('.horz').stop().animate({
      width: '0'
    }, 300);
    jQuery(this.el).find('.item-name').stop().animate({
      marginTop: '1.6em'
    }, 300);
    jQuery(this.el).find('.desc').stop().animate({
      opacity: 0,
      marginTop: '2em'
    }, 300);
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
        let w = jQuery(this.el).innerWidth() - 50;
        let h = jQuery(this.el).innerHeight() - 50;
        jQuery(this.el).find('.item').css({
          'border': '1px solid rgba(0, 0, 0, 0.09)'});
        jQuery(this.el).find('.item').stop().animate({
          backgroundPositionX: '40%'
        }, 300);
        jQuery(this.el).find('.veil').stop().animate({
          opacity: '0.6'
        }, 300);
        jQuery(this.el).find('.vert').stop().animate({
          height: h + 'px'
        }, 500);
        jQuery(this.el).find('.horz').stop().animate({
          width: w + 'px'
        }, 500);
        jQuery(this.el).find('.item-name').stop().animate({
          marginTop: '-0.5em'
        }, 500);
        jQuery(this.el).find('.desc').stop().animate({
          opacity: 1,
          marginTop: '0'
        }, 500);
        let others = jQuery('.touch-click').not(this.el);
        jQuery(others).removeClass('hover');
        jQuery(others).find('.item').css({
          'border': '1px solid rgba(0, 0, 0, 0.05)'});
        jQuery(others).find('.item').stop().animate({
          backgroundPositionX: '20%'
        }, 300);
        jQuery(others).find('.veil').stop().animate({
          opacity: '0.05'
        }, 300);
        jQuery(others).find('.vert').stop().animate({
          height: '0'
        }, 300);
        jQuery(others).find('.horz').stop().animate({
          width: '0'
        }, 300);
        jQuery(others).find('.item-name').stop().animate({
          marginTop: '1.6em'
        }, 300);
        jQuery(others).find('.desc').stop().animate({
          opacity: 0,
          marginTop: '2em'
        }, 300);
        event.preventDefault();
        return false;
      }
    }
  }
}
