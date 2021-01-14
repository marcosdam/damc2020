import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  // Para acceder a elementos del HTML desde typescript usamos @ViewChild
  @ViewChild(IonInfiniteScroll, {static: false}) ionInfiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20); // lista
  constructor() { }

  ngOnInit() {
  }

  // Func para cargar datos en el Infinite Scroll
  loadData(event) {
    if (this.data.length > 50) {
      event.target.complete();
      this.ionInfiniteScroll.disabled = true;
      return;
    }
    setTimeout(() => {
      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      event.target.complete();
    }, 500);
  }
}
