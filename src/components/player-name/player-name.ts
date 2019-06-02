import { Component, Input } from '@angular/core';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { App } from 'ionic-angular';

import { BattleSelectorPage } from '../../pages/battle-selector/battle-selector';

@Component({
  selector: 'player-name',
  templateUrl: 'player-name.html'
})
export class PlayerNameComponent {

  competitor:string;
  number:number;
  
  constructor(
    private challengeProvider:ChallengeProvider,
    private app:App
  ) {}

  clickContinue(){
    this.challengeProvider.saveCompetitor(this.competitor);
    if(this.challengeProvider.allCompetitorsLoaded()) this.app.getActiveNav().setRoot(BattleSelectorPage);
  }

  @Input('competitorNumber') set competitorNumber (number:number){
    this.competitor = "";
    this.number = number + 1;
  }


}
