import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './categoria';
import { Subcategoria } from './subcategoria';

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class CategoriasProvider {

  constructor(public _http: Http) {
    console.log('Hello CategoriasProvider Provider');
  }

  getcategorias(): Observable<Categoria[]> {
      return this._http.get('http://codigito.com:8000/categoria')
      .map((response: Response) => <Categoria[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }

  getsubcategorias(categoria): Observable<Subcategoria[]> {
      return this._http.get('http://codigito.com:8000/subcategoria/'+categoria)
      .map((response: Response) => <Subcategoria[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }

}

