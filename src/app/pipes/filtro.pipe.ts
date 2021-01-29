import { Pipe, PipeTransform } from '@angular/core';
import {Album} from '../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // Transform por defecto
  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  // Creamos Transform propio
  transform(lista: Album[], texto: string, columna: string): any[] {  // Cogemos lista, la filtramos por texto y finalmente la devolvemos
    console.log(lista);
    // Si el texto
    if (texto === ''){
      return lista;
    }
    else {
      return lista.filter(item => {
        return item[columna].includes(texto);
      });
    }
  }

}
