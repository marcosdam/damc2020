import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList, ToastController} from '@ionic/angular';

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

  // Añadir dataService al constructor & añadir controlador del Toast
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  // Inicio los usuarios de jsonplaceholder de data.service.ts
  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  // func Toast
  async presentarToast(message: string) {
    const toast = await this.toastCtrl.create({
      header: 'string',
      color: 'success',
      message,
      duration: 2000,
      position: 'middle'
    });
    await toast.present();
  }

  // func Favoritos
    favoritos(user: any) {
    console.log('Favoritos', user);
    this.presentarToast('Añadido a favoritos con éxito');
    this.lista.closeSlidingItems();
  }

  // func Compartir
    compartir(user: any) {
    console.log('Compartir', user);
    this.presentarToast('Compartido con éxito');
    this.lista.closeSlidingItems();
  }

  // func Borrar
    borrar(user: any) {
      console.log('Borrar', user);
      this.presentarToast('Eliminado con éxito');
      this.lista.closeSlidingItems();
    }
}
