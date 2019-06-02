import { Injectable } from '@angular/core';

@Injectable()
export class ChallengeProvider {

  competitors:string[] = []
  battleModes = ["Easy Mode", "Hard Mode", "Tematicas", "Personajes Contrapuestos", "4x4"]

  constructor() {}

  saveCompetitor(competitor){
    this.competitors.push(competitor);
  }

  allCompetitorsLoaded(){
    return this.competitors.length === 2;
  }

}
