import { Component } from '@angular/core';
import { ChallengeProvider } from '../../providers/challenge/challenge';

@Component({
  selector: 'battle-points-selector',
  templateUrl: 'battle-points-selector.html'
})
export class BattlePointsSelectorComponent {

  constructor(private challengeProvider:ChallengeProvider) {}

  clickPointHandler(value){
    this.challengeProvider.pointBar(value);
  }

}
