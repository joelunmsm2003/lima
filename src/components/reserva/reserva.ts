import { Component } from '@angular/core';

/**
 * Generated class for the ReservaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reserva',
  templateUrl: 'reserva.html'
})
export class ReservaComponent {

  text: string;

  constructor() {
    console.log('Hello ReservaComponent Component');
    this.text = 'Hello World';
  }

}
