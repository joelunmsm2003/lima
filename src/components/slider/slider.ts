import { Component } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { VentaPage } from '../../pages/venta/venta';
/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sliderpue',
  templateUrl: 'slider.html',
  providers: [CategoriasProvider]
})
export class SliderComponent {

  text: string;

  host='http://codigito.com:8000/'

  categoria: Categoria[];

  ventaPage: any;


  constructor(private _categoria: CategoriasProvider) {

      this.ventaPage = VentaPage;

	    this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);

  }






    

 



}
