import { Component } from '@angular/core';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { ModesProvider } from '../../providers/modes/modes';
import { App } from 'ionic-angular';
import { ModeStatsPage } from '../../pages/mode-stats/mode-stats';

@Component({
  selector: 'battle-points-display',
  templateUrl: 'battle-points-display.html'
})
export class BattlePointsDisplayComponent {

  constructor(
    private challengeProvider:ChallengeProvider,
    private modesProvider:ModesProvider,
    private app:App
  ) {}

  getBarPoints() {
    return this.modesProvider.currentMode.points[this.challengeProvider.currentCompetitor][this.modesProvider.currentBar];
  }

  checkScore() {
    this.app.getActiveNav().push(ModeStatsPage);
  }

}
