import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  // Lista de elementos
  personajes = ['Aquaman', 'Batman', 'Flash', 'Superman', 'Wonder Woman'];

  constructor() { }

  ngOnInit() {
  }

  // func para reordenar lista de elementos
  reorder(event: CustomEvent) {
    console.log(event);
    // Coger elemento seleccionado por el usuario y quitarlo del array (guardarlo a parte y colocarlo en el destino)
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];  // Guarda posición 0 del array
    this.personajes.splice(event.detail.to, 0, itemMover);  // Reemplaza
    event.detail.complete();
  }
}
