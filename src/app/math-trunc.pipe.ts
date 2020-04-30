import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathTrunc'
})
export class MathTruncPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.trunc(value).toString() 
  }

}
