import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
import { Subcategoria } from '../../providers/categorias/subcategoria';
import { Storage } from '@ionic/storage';
import { ReservaPage } from '../reserva/reserva';
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

mano: Subcategoria[];

pies: Subcategoria[];

maquillaje: Subcategoria[];

podologia: Subcategoria[];

masajes: Subcategoria[];

manicureninas: Subcategoria[];

baber: Subcategoria[];

extras: Subcategoria[];

reservaPage: any;

book: number=0;

precio: number=0

pedido: any={}

muestradescripcion:boolean=true





  constructor(private storage: Storage,private _categoria: CategoriasProvider,public navCtrl: NavController,public http: Http, public navParams: NavParams) {


  		this.reservaPage = ReservaPage;


	    this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);



        this._categoria.getsubcategorias(1)
      .subscribe(data => this.mano = data);

       this._categoria.getsubcategorias(2)
      .subscribe(data => this.pies = data);

          this._categoria.getsubcategorias(3)
      .subscribe(data => this.maquillaje = data);

         this._categoria.getsubcategorias(4)
      .subscribe(data => this.podologia = data);

         this._categoria.getsubcategorias(5)
      .subscribe(data => this.masajes = data);

       this._categoria.getsubcategorias(6)
      .subscribe(data => this.manicureninas = data);

       this._categoria.getsubcategorias(7)
      .subscribe(data => this.baber = data);


       this._categoria.getsubcategorias(8)
      .subscribe(data => this.extras = data);

      this.storage.get('selecciona').then((val) => {


          console.log('valllll',val)

          if (val==1){

          this.subcategoria = this.mano
          }

          if (val==2){

          this.subcategoria = this.pies
          }

          if (val==3){

          this.subcategoria = this.maquillaje
          }

          if (val==4){

          this.subcategoria = this.podologia
          }

          if (val==5){

          this.subcategoria = this.masajes
          }

          if (val==6){

          this.subcategoria = this.manicureninas
          }

          if (val==7){

          this.subcategoria = this.baber
          }

          if (val==8){

          this.subcategoria = this.extras
          }

     
      
      });

  

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaPage');
  }




  public traesubcategorias(data){

  console.log(data.id)

  // this._categoria.getsubcategorias(data.id)
  //     .subscribe(data => this.subcategoria = data);

  if (data.id==1){

    this.subcategoria = this.mano
  }

  if (data.id==2){

    this.subcategoria = this.pies
  }

   if (data.id==3){

    this.subcategoria = this.maquillaje
  }

   if (data.id==4){

    this.subcategoria = this.podologia
  }

   if (data.id==5){

    this.subcategoria = this.masajes
  }

    if (data.id==6){

    this.subcategoria = this.manicureninas
  }

   if (data.id==7){

    this.subcategoria = this.baber
  }

  if (data.id==8){

    this.subcategoria = this.extras
  }

  

  }

  

  agregacarrito(data){


    console.log('agregacarrito',data)


    this.precio = this.precio+data.precio
   
    this.book=this.book+1

    this.storage.set('pedido', data)

    this.storage.get('pedido').then((val) => {

      console.log('Your age is', val);

    });

  }

  quitacarrito(data){

      console.log('quitacarrito',data)
     
      this.book=this.book-1

      this.precio = this.precio-data.precio

      console.log(data)

  }


}







