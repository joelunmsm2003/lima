import { Component } from '@angular/core';

/**
 * Generated class for the RegistroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registro',
  templateUrl: 'registro.html'
})
export class RegistroComponent {

  text: string;

  constructor() {
    console.log('Hello RegistroComponent Component');
    this.text = 'Hello World';
  }

}
