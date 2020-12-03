import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  // Array de objetos
  data = [
      {
        name: 'Primero',
        selected: true,
        color: 'primary'
      },
    {
      name: 'Segundo',
      selected: false,
      color: 'secondary'
    },
    {
      name: 'Tercero',
      selected: true,
      color: 'tertiary'
    },
    {
      name: 'Cuarto',
      selected: true,
      color: 'danger'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(variable) {
    console.log(variable);
  }
}
