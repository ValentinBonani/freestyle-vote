import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { ModesProvider } from '../../providers/modes/modes';
import { FinalScorePage } from '../final-score/final-score';

@IonicPage()
@Component({
  selector: 'page-battle',
  templateUrl: 'battle.html',
})
export class BattlePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private challengeProvider:ChallengeProvider,
    private modesProvider:ModesProvider
    ) {}
  

    clickCheckResult() {
      this.navCtrl.setRoot(FinalScorePage);
    }

  }
