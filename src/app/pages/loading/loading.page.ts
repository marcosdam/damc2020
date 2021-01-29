import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  // Var
  loading: any;

  // Inyectar LoadingController
  constructor(private loadingCtrl: LoadingController) { }

  // llamar al presentLoading()
  ngOnInit() {
    this.presentLoading('Por favor, espere...');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  // Func loadingController
  async presentLoading(mensaje: string){
    this.loading = await this.loadingCtrl.create({
      message: mensaje
    });
    return this.loading.present();
  }

}
