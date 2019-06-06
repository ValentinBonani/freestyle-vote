import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { ModesProvider } from '../../providers/modes/modes';

@IonicPage()
@Component({
  selector: 'page-final-score',
  templateUrl: 'final-score.html',
})
export class FinalScorePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private challengeProvider: ChallengeProvider,
    private modesProvider: ModesProvider
  ) {}

  clickDetails() {}

}
