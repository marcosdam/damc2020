import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.page.html',
    styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    // Recibir datos del padre -> @Input
    @Input() nombre;
    @Input() pais;

    // Inyectar modalController
    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    // dismiss para salir
    salirSinArgumentos() {
        this.modalCtrl.dismiss();
    }

    // pasar datos del hijo al padre
    salirConArgumentos() {
        this.modalCtrl.dismiss( {
            nombre: 'carlos',
            pais: 'francia'
        });
    }
}
