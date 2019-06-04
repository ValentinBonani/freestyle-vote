import { Component } from '@angular/core';
import { BattlePage } from '../../pages/battle/battle';
import { App } from 'ionic-angular';
import { ModesProvider } from '../../providers/modes/modes';

@Component({
  selector: 'battle-modes',
  templateUrl: 'battle-modes.html'
})
export class BattleModesComponent {

  text: string;

  constructor(
    private modesProvider:ModesProvider,
    private app:App
  ) {}

  clickStart() {
    this.modesProvider.selectNextMode();
    this.app.getActiveNav().setRoot(BattlePage);
  }
}
