import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  // Array para tener un scroll
  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
