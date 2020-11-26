import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

    async mostrarAlert() {
        const alert = await this.alertCtrl.create({
          header: 'Alert', // Título del Alert
          subHeader: 'Subtítulo',
          message: 'Este es el mensaje de autodestrucción',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cancelado');
            }
          },
            {
              text: 'OK',
              handler: () => {
                console.log('OK');
              }
            }]
        });
        await alert.present();
    }

  async mostrarInput() {
    const alert = await this.alertCtrl.create({
      header: 'Título',
      subHeader: 'Escribe el título',
      inputs: [{
        name: 'name',
        type: 'text',
        placeholder: 'Escribe el título aquí...'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');
        }
      },
        {
          text: 'OK',
          handler: (datos) => {
            console.log('Los datos son: ', datos);
            this.titulo = datos.name;
          }
        }]
    });
    await alert.present();
  }
}
