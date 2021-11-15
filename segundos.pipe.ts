import { Pipe, PipeTransform } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Pipe({
  name: 'Transformar'
})
export class SegundosPipe implements PipeTransform {

  transform(Transformar: number, cantidad: 'Minutos' | 'Horas' = 'Minutos'): number {
    
    
     if (cantidad === 'Horas') {

      return (Transformar / 60) / 60;
    
          } else if (cantidad === 'Minutos') {

      return Transformar / 60;
      

    } else {
      return 0;



    }
  }
}
