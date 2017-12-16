import { Component } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { HomePage } from '../../pages/home/home';
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


  tab1Root = ListPage;


  // @ViewChild(Slides) slides: Slides;

  // ngAfterViewInit() {
  //   this.slides.autoplay = true;
  // }




  constructor(private _categoria: CategoriasProvider) {





	    this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);


 

  }



    

 



}
