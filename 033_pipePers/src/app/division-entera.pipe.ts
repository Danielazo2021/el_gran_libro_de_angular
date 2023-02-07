import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisionEntera'
})
export class DivisionEnteraPipe implements PipeTransform {

  transform(value: number, divisor:any): string {
   
   let div= parseFloat(divisor);
   let cociente=Math.floor(value/div);
   let resto= value % div
   
    return "cociente: " + cociente + " resto: " + resto;
  }

}
