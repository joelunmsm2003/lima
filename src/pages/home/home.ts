import { Component,Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { LoginComponent } from '../../components/login/login';
import { SliderComponent } from '../../components/slider/slider';
import { CategoriasComponent } from '../../components/categorias/categorias';
import { AuthHttp,JwtHelper } from 'angular2-jwt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




 API_URL: string = 'http://xiencias.com:3000';

  map: GoogleMap;



  constructor(public navCtrl: NavController,public http: Http,private authHttp: AuthHttp,private googleMaps: GoogleMaps) {}



 

  ionViewDidLoad(){
    this.loadMap();


  }


  loadMap(){

  let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: 43.0741904, // default location
        lng: -89.3809802 // default location
      },
      zoom: 18,
      tilt: 30
    }
  };

  this.map = this.googleMaps.create('map_canvas', mapOptions);

  this.http.get('http://codigito.com:8000/categoria')
  .subscribe(
    data => {}

  );

  // Wait the MAP_READY before using any methods.
  this.map.one(GoogleMapsEvent.MAP_READY)
  .then(() => {
    // Now you can use all methods safely.
    this.getPosition();
  })
  .catch(error =>{
    console.log(error);
  });

}

getPosition(): void{
  this.map.getMyLocation()
  .then(response => {
    this.map.moveCamera({
      target: response.latLng
    });
    this.map.addMarker({
      title: 'My Position',
      icon: 'blue',
      animation: 'DROP',
      position: response.latLng
    });
  })
  .catch(error =>{
    console.log(error);
  });
}




  public securedPing(data) {

    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
   
    this.authHttp.get(`${this.API_URL}/agente/`)
      .subscribe(
        data => {

          console.log('user',data)

        }
        
      );
  }



}






