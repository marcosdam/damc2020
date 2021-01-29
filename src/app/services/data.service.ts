import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/interfaces';
import * as https from 'https';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    // Función para obtener el array de objetos de menu.json
    getMenuOpts() {
        return this.http.get<Componente[]>('/assets/data/menu.json');
    }
    // Función para obtener users de la api de jsonplaceholder
    getUsers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    //
  getAlbums(){
    return this.http.get('http://jsonplaceholder.typicode.com/albums');
  }
}
