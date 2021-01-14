import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  // Array vacío
  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  // Func doRefresh
  doRefresh(event) {
    setTimeout( () => {
      this.items = Array(40);
      event.target.complete();
    }, 1000);
  }
}
