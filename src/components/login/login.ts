import { Component } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';


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


  constructor(private http: Http, private authHttp: AuthHttp,private storage: Storage) {





  }



  public authenticate(username, password) {

  let creds = JSON.stringify({ username: 'root', password: 'rosa0000' });



  let jwtHelper: JwtHelper = new JwtHelper();

  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

  this.http.post('http://xiencias.com:3000/api-token-auth/', creds, options)
    .subscribe(
      data => {

        
         
        //localStorage.setItem('token', JSON.parse(data["_body"]).token)

         this.storage.set('token', JSON.parse(data["_body"]).token)
         //console.log('jwtHelper',jwtHelper.getTokenExpirationDate(JSON.parse(data["_body"]).token),JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)))

        //console.log(JSON.parse(data._body).token)
      }
 
    );

}
}




