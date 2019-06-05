import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModesProvider } from '../../providers/modes/modes';
import { ChallengeProvider } from '../../providers/challenge/challenge';

@IonicPage()
@Component({
  selector: 'page-mode-stats',
  templateUrl: 'mode-stats.html',
})
export class ModeStatsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modesProvider: ModesProvider,
    private challengeProvider: ChallengeProvider
    ) {}

    goBack() {
      this.navCtrl.pop();
    }
}
