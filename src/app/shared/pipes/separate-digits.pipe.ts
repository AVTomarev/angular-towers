import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separateDigits'
})
export class SeparateDigitsPipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value !== 'number') {
      return value;
    }

    return value
      .toString()
      .replace(/(d{1,3})(?=(?:ddd)+(?:D|$))/g,'$1 ');
  }
}
