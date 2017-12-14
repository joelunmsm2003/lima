import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../../components/login/login';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt'
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public http: Http,private authHttp: AuthHttp) {

  	 // this.http.get('http://codigito.com:8000/prueba/')
    //         .map(res => res.json()).subscribe(data => {

    //             let responseData = data;
    //             console.log(responseData);
            
    //         }


     this.authHttp.get('http://xiencias.com:3000/agente/').map(res => res.json()).subscribe(data => {

                
                console.log('agentes',data);
            
            });


}


}






