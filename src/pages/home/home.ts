import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../../components/login/login';
import { AuthHttp,JwtHelper } from 'angular2-jwt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 API_URL: string = 'http://xiencias.com:3000';

  constructor(public navCtrl: NavController,public http: Http,private authHttp: AuthHttp) {}

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






