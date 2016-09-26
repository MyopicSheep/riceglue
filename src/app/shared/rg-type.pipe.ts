import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgType'
})
export class RgTypePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (value) {
      value = value.toLowerCase();
    } else {
      value = '';
    }
    return items.filter(item =>
      item.type.toLowerCase() === value);
  }

}
