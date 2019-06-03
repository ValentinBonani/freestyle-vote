import { Injectable } from '@angular/core';

@Injectable()
export class ChallengeProvider {

  currentMode;
  points = [0,1,2,3,4]
  competitors:string[] = []
  battleModes = [
    { name: "Easy Mode", state: true },
    { name: "Hard Mode", state: true },
    { name: "Tematicas", state:true },
    { name: "Personajes Contrapuestos", state:true },
    { name: "4x4", state:true }
  ]

  constructor() {}

  startBattle(){
    this.selectNextMode();
  }

  saveCompetitor(competitor){
    this.competitors.push(competitor);
  }

  allCompetitorsLoaded(){
    return this.competitors.length === 2;
  }

  selectNextMode(){
    this.currentMode = this.battleModes.find(mode => mode.state);
  }

}
