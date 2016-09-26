import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgSearch'
})
export class RgSearchPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    let month = ['January ', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    if (value) {
      value = value.toLowerCase();
    } else {
      value = '';
    }
    let values = value.replace(/\,/g, '').split(' ');
    return items.filter(item =>
      item.title.toLowerCase().indexOf(value) > -1 ||
      item.desc.toLowerCase().indexOf(value) > -1 ||
      item.date.getFullYear().toString() === value ||
      month[item.date.getMonth()].toLowerCase().indexOf(value) > -1 ||
      (month[item.date.getMonth()].toLowerCase().indexOf(values[0]) > -1 &&
        item.date.getFullYear().toString() === values[1] ) ||
      (month[item.date.getMonth()].toLowerCase().indexOf(values[0]) > -1 &&
        item.date.getDate().toString() === values[1] &&
        item.date.getFullYear().toString() === values[2] ) ||
        item.category.toLowerCase().indexOf(value) > -1
      );
  }

}
