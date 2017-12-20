import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
import { Subcategoria } from '../../providers/categorias/subcategoria';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venta',
  templateUrl: 'venta.html',
  providers: [CategoriasProvider]
})
export class VentaPage {


categoria: Categoria[];

myVar=true

host ='http://codigito.com:8000/'

subcategoria: Subcategoria[];

venta: Subcategoria[];

  constructor(private storage: Storage,private _categoria: CategoriasProvider,public navCtrl: NavController,public http: Http, public navParams: NavParams) {



	this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);

        this._categoria.getsubcategorias(1)
      .subscribe(data => this.subcategoria = data);

  

  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaPage');
  }

  traesubcategorias(data){

console.log(data.id)

  this._categoria.getsubcategorias(data.id)
      .subscribe(data => this.subcategoria = data);

  

  }

   agregacarrito(data){

    console.log('uuuuuu')

    this.storage.set('pedido', data)

     this.storage.get('pedido').then((val) => {
    console.log('Your age is', val);
  });

  }


}







