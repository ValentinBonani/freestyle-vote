import { Component } from '@angular/core';

/**
 * Generated class for the PlayerNameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'player-name',
  templateUrl: 'player-name.html'
})
export class PlayerNameComponent {

  text: string;

  constructor() {
    console.log('Hello PlayerNameComponent Component');
    this.text = 'Hello asdasdasd';
  }

}
