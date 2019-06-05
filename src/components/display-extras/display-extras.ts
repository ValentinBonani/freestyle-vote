import { Component } from '@angular/core';
import { ModesProvider } from '../../providers/modes/modes';
import { ChallengeProvider } from '../../providers/challenge/challenge';

@Component({
  selector: 'display-extras',
  templateUrl: 'display-extras.html'
})
export class DisplayExtrasComponent {


  constructor(
    private modesProvider:ModesProvider,
    private challengeProvider:ChallengeProvider
  ) {}

  getExtraPoints(value) {
    return this.modesProvider.currentMode.extras[this.challengeProvider.currentCompetitor][value];
  }

}
