import { Component } from '@angular/core';

/**
 * Generated class for the SociaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'socia',
  templateUrl: 'socia.html'
})
export class SociaComponent {

  text: string;

  constructor() {
    console.log('Hello SociaComponent Component');
    this.text = 'Hello World';
  }

}
