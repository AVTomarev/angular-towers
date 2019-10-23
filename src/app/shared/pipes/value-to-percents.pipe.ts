import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueToPercents'
})
export class ValueToPercentsPipe implements PipeTransform {
  transform(
    value: any,
    minValue: any,
    maxValue: any
  ): any {
    if (typeof value !== 'number' &&
        typeof minValue !== 'number' &&
        typeof maxValue !== 'number') {
      return value;
    }

    const range = maxValue - minValue;

    return Math.floor((value / range) * 100);
  }

}
