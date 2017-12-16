import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginComponent } from '../components/login/login';
import { SliderComponent } from '../components/slider/slider';
import { CategoriasComponent } from '../components/categorias/categorias';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions, HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import {IonicStorageModule} from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 

import { GoogleMaps } from '@ionic-native/google-maps';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { PortadaProvider } from '../providers/portada/portada';

let storage = new Storage({});

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('token').then((token: string) => token)),
  }), http);
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    SliderComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    CategoriasProvider,
    PortadaProvider
  ]
})
export class AppModule {}
