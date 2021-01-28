import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

    constructor() {
    }

    // Array de objetos (en series, puntuaciones debe ser así)
    slides: { img: string, titulo: string, desc: string }[] = [
        {
            img: '/assets/images/slides/camera.svg',
            titulo: 'Mis mejores fotos',
            desc: 'Las fotos más maravillosas del mundo'
        },
        {
            img: '/assets/images/slides/music.png',
            titulo: 'Dale al play!',
            desc: 'La mejor música en directo'
        },
        {
            img: '/assets/images/slides/calendar.png',
            titulo: 'Que no se te olvide nada',
            desc: 'Recordatorio de tus fechas más importantes'
        },
        {
            img: '/assets/images/slides/placeholder.png',
            titulo: 'Ubicación en el momento',
            desc: 'Te detectamos allí donde estés'
        }
    ];

    ngOnInit() {
    }

}
