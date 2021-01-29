import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.page.html',
    styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

    // Vars
    fechaNac: Date = new Date();
    customPickerOpciones: any;
    customFecha: any;

    constructor() {
    }

    //
    ngOnInit() {
        this.customPickerOpciones = {
            buttons: [{
                text: 'Guardar',
                handler: (evento) => {
                    console.log('Clickado guardado');
                    console.log('Evento: ', evento);
                }
            },
                {
                    text: 'Log',
                    handler: () => {
                        console.log('Log clickado. do not dismiss. ');
                        return false;
                    }
                }
            ]
        };
    }

    //
    cambioFecha(event: any) {
        console.log('ionChange', event);
        console.log('Fecha: ', new Date(event.detail.value));
    }
}
