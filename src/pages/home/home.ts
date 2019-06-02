import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChallengeProvider } from '../../providers/challenge/challenge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private challengeProvider:ChallengeProvider
  ) {}

  competitorNumber(){
    return this.challengeProvider.competitors.length;
  }

}
