import { Component } from '@angular/core';
import { BattlePage } from '../../pages/battle/battle';
import { App } from 'ionic-angular';
import { ModesProvider } from '../../providers/modes/modes';
import { ChallengeProvider } from '../../providers/challenge/challenge';

@Component({
  selector: 'battle-modes',
  templateUrl: 'battle-modes.html'
})
export class BattleModesComponent {

  constructor(
    private modesProvider:ModesProvider,
    private challengeProvider:ChallengeProvider,
    private app:App
  ) {}

  clickStart() {
    this.challengeProvider.startBattle();
    this.app.getActiveNav().setRoot(BattlePage);
  }
}
