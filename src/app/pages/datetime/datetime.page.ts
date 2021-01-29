import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  // Vars
  fechaNac: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  //
  cambioFecha(event: any) {
    console.log('ionChange', event);
    console.log('Fecha: ', new Date(event.detail.value));
  }
}
