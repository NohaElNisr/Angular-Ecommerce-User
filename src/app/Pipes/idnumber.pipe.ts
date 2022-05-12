import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iDNumber'
})
export class IDNumberPipe implements PipeTransform {

  transform(value: any): any {
    if (value.slice(1, 3) < 20) {
      return value.slice(3, 5) + "/" + value.slice(5, 7) + "/20" + value.slice(1, 3)
    }
    else
    
    {
      return value.slice(3, 5) + "/" + value.slice(5, 7) + "/19" + value.slice(1, 3)
    }

  }
}
