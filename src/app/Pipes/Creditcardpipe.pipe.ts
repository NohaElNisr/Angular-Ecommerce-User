import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CreditCard'
})
export class CustompipePipe implements PipeTransform {

  
  transform(value: string): string {
    return value.slice(0,4)+"-"+value.slice(4,8)+"-"+value.slice(8,12)+"-"+value.slice(12,16);
  }
}
