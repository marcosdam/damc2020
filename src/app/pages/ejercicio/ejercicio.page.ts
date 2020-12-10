import { Component, OnInit } from '@angular/core';
import {Elemento} from '../../interfaces/interfaces';
import {AlertController} from '@ionic/angular';
import {element} from 'protractor';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  // Array de objetos Elemento
  listaElementos: Elemento[] = [
    {
      autor: 'Pepe García',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at ...',
      imagen: '/assets/images/Proyecto1.jpg',
      titulo: 'Nace una estrella'
    },
    {
      autor: 'Jhonny Silverhand',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at ...',
      imagen: '/assets/images/Proyecto2.jpg',
      titulo: 'El amanecer del mundo cibernético'
    },
    {
      autor: 'Dawn Jhonson',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at ...',
      imagen: '/assets/images/Proyecto3.jpg',
      titulo: 'Amanecer en Los Santos'
    },
    {
      autor: 'Cloud Stride',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at ...',
      imagen: '/assets/images/Proyecto4.jpg',
      titulo: 'Anochece en Nibelheim'
    }
  ];

  listaFavoritos: Elemento[] = [];

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async compartir(titulo: string) {
    const alert = await this.alertControl.create({
      header: titulo,
      buttons: [{
        text: 'Compartir',
        handler: () => {
          console.log('Compartir pulsado -> ' + titulo);
        }
      },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }]
    });
    await alert.present();
  }

  async meGusta(tarjeta: Elemento) {
    const alert = await this.alertControl.create({
      header: 'Favoritos',
      subHeader: 'Desea Añadir a Favoritos?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');
        }
      },
        {
          text: 'OK',
          handler: () => {
            // Añadir tarjeta a favoritos
            this.listaFavoritos.push(tarjeta);
            console.log('Nuevo favorito en la lista: ', this.listaFavoritos);
          }
        }]
    });
    await alert.present();
  }
}
