import { Injectable } from '@angular/core';
import { ModesProvider } from '../modes/modes';

@Injectable()
export class ChallengeProvider {

  points = [0,1,2,3,4]
  competitors:string[] = []
  currentCompetitor = 0;


  constructor(private modesProvider:ModesProvider) {}

  startBattle() {
    this.modesProvider.selectNextMode();
  }

  switchCompetitor() {
    if (this.currentCompetitor) this.currentCompetitor = 0;
    else this.currentCompetitor = 1;
  }

  pointBar(value) {
    this.modesProvider.currentMode.points[this.currentCompetitor][this.modesProvider.currentBar] = value;
    setTimeout(this.selectNextBar,350);
  }

  selectLastBar = () => {
    if (this.modesProvider.currentMode.setLastBar()) this.switchCompetitor()
  }

  selectNextBar = () => {
    if (this.modesProvider.currentMode.setNextBar()) this.switchCompetitor()
  }

  saveCompetitor(competitor){
    this.competitors.push(competitor);
  }

  allCompetitorsLoaded(){
    return this.competitors.length === 2;
  }



}
