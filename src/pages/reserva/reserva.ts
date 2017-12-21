import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {


	map: GoogleMap;



  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservaPage');

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


}
