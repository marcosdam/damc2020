import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopinfoComponent} from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

    async mostrarPop(event: MouseEvent) {
        const popover = await this.popoverCtrl.create({
          // Cagar componente popinfo
          component: PopinfoComponent,
          event,
          mode: 'ios',
          backdropDismiss: false
        });
        await popover.present();
    }
}
