import { Injectable } from '@angular/core';
import { ModesProvider } from '../modes/modes';

@Injectable()
export class ChallengeProvider {

  points = [0,1,2,3,4]
  competitors:string[] = []
  currentBar = 0;
  currentCompetitor = 0;


  constructor(private modesProvider:ModesProvider) {}

  startBattle(){
    this.modesProvider.selectNextMode();
  }

  pointBar(value){
    this.modesProvider.currentMode.points[this.currentCompetitor][this.currentBar] = value;
    setTimeout(this.setNextBar,350);
  }

  selectLastBar(){
    this.setLastBar();
  }

  selectNextBar(){
    this.setNextBar();
  }
  

  setNextBar = () => {
    if(this.modesProvider.currentMode.solo && ((this.currentBar + 1) < this.modesProvider.currentMode.barsCount)){
      this.currentBar++
    } else if (this.modesProvider.currentMode.solo && ((this.currentBar + 1) === this.modesProvider.currentMode.barsCount)) {
      this.currentBar = 0,
      this.currentCompetitor++
    }
  }

  setLastBar = () => {
    if(this.modesProvider.currentMode.solo && ((this.currentBar) > 0)){
      this.currentBar--
    } else if (this.modesProvider.currentMode.solo && ((this.currentBar) === 0)) {
      this.currentBar = 0,
      this.currentCompetitor++
    }

  }

  saveCompetitor(competitor){
    this.competitors.push(competitor);
  }

  allCompetitorsLoaded(){
    return this.competitors.length === 2;
  }



}
