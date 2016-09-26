import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgPublishDate'
})
export class RgPublishDatePipe implements PipeTransform {

  transform(items: any[]) {
    let today = new Date();
    let eightWeeksAgo = new Date(today.getTime() - (60 * 60 * 24 * 7 * 1000 * 8));
    return items.filter(item => item.date <= today && item.date >= eightWeeksAgo );
  }

}
