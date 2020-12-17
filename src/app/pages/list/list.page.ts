import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  // Crear ViewChild
  @ViewChild('lista', {static: false}) lista: IonList;

  // Array de usuarios
  usuarios: Observable<any>;

  // Añadir dataService al constructor
  constructor(private dataService: DataService) { }

  // Inicio los usuarios de jsonplaceholder de data.service.ts
  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  // func Favoritos
  favoritos(user: any) {
    console.log('Favoritos', user);
    this.lista.closeSlidingItems();
  }

  // func Favoritos
  compartir(user: any) {
    console.log('Compartir', user);
    this.lista.closeSlidingItems();
  }

  // func Favoritos
  borrar(user: any) {
    console.log('Borrar', user);
    this.lista.closeSlidingItems();
  }
}
