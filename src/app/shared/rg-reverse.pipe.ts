import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgReverse'
})
export class RgReversePipe implements PipeTransform {
  transform(items: any[]) {
    return items.slice().reverse();
  }
}
