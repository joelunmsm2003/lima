import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */


interface Credentials {
  username: string,
  password: string
}

export class User {
  constructor(
    public username: string,
    public password: string
  ) {  }
}


  

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  credentials: Credentials;


   model = new User('sjjs','ProductA');


  constructor(private http: Http) {}

  onLogin(credentials) {


  		console.log('credentials',credentials)
    
  	   this.http.post('http://xiencias.com:3000/api-token-auth/', credentials)
      .map(res => res.json())
      .subscribe(

        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  }

}






