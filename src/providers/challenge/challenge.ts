import { Injectable } from '@angular/core';

@Injectable()
export class ChallengeProvider {

  competitors:string[] = []
  battleModes = [{name: "Easy Mode", state: true}, {name: "Hard Mode",state: true}, {name: "Tematicas",state:true}, {name: "Personajes Contrapuestos",state:true}, {name: "4x4",state:true}]

  constructor() {}

  saveCompetitor(competitor){
    this.competitors.push(competitor);
  }

  allCompetitorsLoaded(){
    return this.competitors.length === 2;
  }

}
