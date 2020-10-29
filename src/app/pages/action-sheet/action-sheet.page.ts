import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-action-sheet',
    templateUrl: './action-sheet.page.html',
    styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

    constructor(private actionSheetCtrl: ActionSheetController) {
    }

    ngOnInit() {
    }

    async mostrarActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            header: 'Albums',
            backdropDismiss: false,
            buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                cssClass: 'rojo',
                handler: () => {
                    console.log('Delete clicked');
                }
            }, {
                text: 'Compartir',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: 'Play',
                icon: 'play',
                handler: () => {
                    console.log('Play clicked');
                }
            }, {
                text: 'Favoritos',
                icon: 'heart',
                handler: () => {
                    console.log('Favoritos clicked');
                }
            }, {
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancelar clicked');
                }
            }]
        });
        await actionSheet.present();
    }
}
