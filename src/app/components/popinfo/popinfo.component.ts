import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  // Array items
  items = Array(40);

  // Inyectar popover controller
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  // Al seleccionar un item de la lista, detecta cuál es y dice su valor (lo envía a mostrarPop() en popover.page.ts)
  onClick(valor: number) {
    this.popoverCtrl.dismiss({
      ladron: valor
    });
  }
}
