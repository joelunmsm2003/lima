import { Component } from '@angular/core';
import { PortadaProvider } from '../../providers/portada/portada';
import { Foto } from '../../providers/portada/foto';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the CategoriasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categoriaspue',
  templateUrl: 'categorias.html',
  providers:[PortadaProvider]
})
export class CategoriasComponent {

  text: string;

  photo: Foto[]

  host='http://codigito.com:8000/'

   @ViewChild(Slides) slides: Slides;

  ngAfterViewInit() {
    this.slides.autoplay = true;
  }



  constructor(private _photo: PortadaProvider) {


  	    this._photo.getfotosdeportada()
      .subscribe(data => this.photo = data);


 

  }


    	
  
}


