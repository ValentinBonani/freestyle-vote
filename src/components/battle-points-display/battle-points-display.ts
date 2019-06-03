import { Component } from '@angular/core';
import { ChallengeProvider } from '../../providers/challenge/challenge';

@Component({
  selector: 'battle-points-display',
  templateUrl: 'battle-points-display.html'
})
export class BattlePointsDisplayComponent {

  constructor(private challengeProvider:ChallengeProvider) {}

}
