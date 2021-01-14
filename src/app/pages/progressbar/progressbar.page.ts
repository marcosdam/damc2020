import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {
  // Var porcentaje (inicialmente 0.5)
  porcentaje = 0.5;

  constructor() { }

  ngOnInit() {
  }
  // Func cambiarRango del progress bar
  cambiarRango(event: CustomEvent) {
    this.porcentaje = event.detail.value * 0.01;
  }
}
