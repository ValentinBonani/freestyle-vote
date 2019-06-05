import { Component, Input } from '@angular/core';
import { ModesProvider } from '../../providers/modes/modes';
import { ChallengeProvider } from '../../providers/challenge/challenge';
@Component({
  selector: 'points-bar',
  templateUrl: 'points-bar.html'
})
export class PointsBarComponent {

  constructor(
    private modesProvider:ModesProvider,
    private challengeProvider:ChallengeProvider
  ) {}

  @Input('competitor') competitor;

  getExtraName(index){
    switch (index) {
      case 0: return "Escena";
      case 1: return "Flow";
      case 2: return "Skills";
    }
  }
}
