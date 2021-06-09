import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multTable',
})
export class MultTablePipe implements PipeTransform {
  transform(_, digit: number, limit: number): Array<string> {
    if (!digit || !limit) {
      return [];
    }
    return new Array(Math.floor(limit)).fill(0).map((_, index) => {
      return `${digit} * ${index + 1} = ${digit * (index + 1)}`;
    });
  }
}
