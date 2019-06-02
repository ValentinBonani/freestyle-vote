import { Component } from '@angular/core';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { App } from 'ionic-angular/umd';
import { BattlePage } from '../../pages/battle/battle';
@Component({
  selector: 'battle-modes',
  templateUrl: 'battle-modes.html'
})
export class BattleModesComponent {

  text: string;

  constructor(
    private challengeProvider:ChallengeProvider,
    private app:App
  ) {
    
  }

  clickStart() {
    this.app.getActiveNav().setRoot(BattlePage);
  }
}
