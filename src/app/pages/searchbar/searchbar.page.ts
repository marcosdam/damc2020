import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Album} from '../../interfaces/interfaces';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.page.html',
    styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

    // Vars
    albums: Album[] = [];
    textoBuscar: string;

    constructor(private dataService: DataService) {
    }

    // Utilizamos getAlbums de data.service.ts (llamada a una API en typicode.url/albums)
    ngOnInit() {
        this.dataService.getAlbums()
            .subscribe(res => {
                this.albums = (res as Album[]);
            });
    }

    // event sin dólar
    buscar(event: CustomEvent) {
        console.log(event);
        this.textoBuscar = event.detail.value;
    }
}

