import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';

// Generamos el pipe que vamos a utilizar como filtro -> En consola -> ionic generate pipe pipes/filtro --skipTests

@NgModule({
  declarations: [FiltroPipe],
  exports: [FiltroPipe],  // Añadimos el export para poder utilizarlo fuera
  imports: [
    // CommonModule  -> No se va a utilizar
  ]
})
export class PipesModule { }
