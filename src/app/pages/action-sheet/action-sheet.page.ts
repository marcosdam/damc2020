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
// Hacemos la función asíncrona porque no sabemos cuánto va a tardar en cargarla
// para no tener la aplicación bloqueada, precargamos la función
// y cuando tenemos todos los elementos cargados, entonces ejecutamos la función
    async mostrarActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            header: 'Albums',   // Título del actionSheet
            backdropDismiss: false, // Opción para si queremos que el usuario cancele al clickar fuera
            buttons: [{ // Array de botones
                text: 'Delete', // Texto del botón
                role: 'destructive', // Rol especial del botón (destructivo lo pone en rojo)
                icon: 'trash',
                cssClass: 'rojo',
                // La función flecha => es la simplificación de una función,
                // en la que tenemos los parámetros (parámetros) => {y el contenido de la función}
                handler: () => {    // Manejador para cuando hagan click en éste botón
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
        // Una vez tengo precargado el Action Sheet, lo muestro
        await actionSheet.present();
    }
}
