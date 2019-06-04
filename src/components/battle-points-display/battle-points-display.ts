import { Component } from '@angular/core';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { ModesProvider } from '../../providers/modes/modes';

@Component({
  selector: 'battle-points-display',
  templateUrl: 'battle-points-display.html'
})
export class BattlePointsDisplayComponent {

  constructor(
    private challengeProvider:ChallengeProvider,
    private modesProvider:ModesProvider
  ) {}

  getBarPoints(){
    return this.modesProvider.currentMode.points[this.challengeProvider.currentCompetitor][this.challengeProvider.currentBar];
  }

}
