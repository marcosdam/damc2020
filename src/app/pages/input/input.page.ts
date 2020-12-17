import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  // Creamos la var nombre
  nombre: string;

  // Objeto usuario
  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  // Func para formulario
  enviarFormulario(formulario) {
    console.log('Formulario enviado', formulario, this.nombre, this.usuario);
  }
}
