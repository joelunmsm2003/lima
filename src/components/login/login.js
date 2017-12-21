var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
export { User };
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, authHttp, storage) {
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.model = new User('sjjs', 'ProductA');
    }
    LoginComponent.prototype.authenticate = function (username, password) {
        var _this = this;
        var creds = JSON.stringify({ username: 'root', password: 'rosa0000' });
        var jwtHelper = new JwtHelper();
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.http.post('http://xiencias.com:3000/api-token-auth/', creds, options)
            .subscribe(function (data) {
            //localStorage.setItem('token', JSON.parse(data["_body"]).token)
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            //console.log('jwtHelper',jwtHelper.getTokenExpirationDate(JSON.parse(data["_body"]).token),JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)))
            //console.log(JSON.parse(data._body).token)
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [Http, AuthHttp, Storage])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.js.map