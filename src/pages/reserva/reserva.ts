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



  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    let self = this;
    setTimeout(function() {
      self.loadMap();
    }, 5000);
  }

  loadMap() {

    alert('entre mierdasss..')
    this.map = this.googleMaps.create('map_canvas');

    alert('estoy marcnadn picnhes')
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let self = this;

      //self.map.on(GoogleMapsEvent.MAP_DRAG_START).subscribe(self.onMapDragStart);
      //self.map.on(GoogleMapsEvent.MAP_DRAG).subscribe(self.onMapDrag);
      //self.map.on(GoogleMapsEvent.MAP_DRAG_END).subscribe(self.onMapDragEnd);

      self.map.addMarker({
        position: {lat: 0, lng: 0},
        title: "hello world"
      }).then(self.onMarkerAdd.bind(self));

    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((latLng) => {
      let self = this;

      self.map.addMarker({
        position: latLng,
        title: latLng.toUrlValue()
      }).then(self.onMarkerAdd.bind(self));

    });
  }

  onMapDragStart() {
    console.log('onMapDragStart');
  }
  onMapDrag() {
    console.log('onMapDrag');
  }
  onMapDragEnd() {
    console.log('onMapDragEnd');
  }

  onMarkerAdd(marker:Marker) {
    marker.one(GoogleMapsEvent.MARKER_CLICK).then(this.onMarkerClick);
  }
  onMarkerClick(parameters: any[]) {
    let marker = parameters[1];

    marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
      alert("info clicked");
    });
  }


}
