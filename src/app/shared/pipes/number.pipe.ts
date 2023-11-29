// million.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'million' })
export class NumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (value >= 0) {
      return (value / 1000000000000).toFixed(2);
    } else {
      return value.toString();
    }
  }
}
