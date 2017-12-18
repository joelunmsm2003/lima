import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
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

  constructor(private _categoria: CategoriasProvider,public navCtrl: NavController,public http: Http, public navParams: NavParams) {



	this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaPage');
  }

}