import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  // Inyectar modalComponent
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

    async abrirModal() {
        const modal = await this.modalCtrl.create({
          component: ModalInfoPage,
          componentProps: {
            nombre: 'Federico',
            pais: 'España'
          }
        });
        await modal.present();
        // Obtener data de modal-info-page.ts
        const {data} = await modal.onDidDismiss();
        console.log('Los valores del ModalInfo son: ', data);
    }
}
