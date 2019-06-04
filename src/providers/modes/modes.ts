import { Injectable } from '@angular/core';
import { ModeInterface } from '../../interfaces/mode';


@Injectable()
export class ModesProvider {

  easyMode: ModeInterface = {
    name: "Easy Mode",
    barsCount:6,
    state: true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    solo:true,
    id:1
  }

  hardMode: ModeInterface = {
    name: "Hard Mode",
    barsCount:6,
    state: true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    solo:true,
    id:2
  }

  thematic: ModeInterface = { 
    name: "Tematicas",
    barsCount:6,
    state:true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    solo:true,
    id:3
  }

  opposingCharacters: ModeInterface = { 
    name: "Personajes Contrapuestos",
    barsCount:6,
    state:true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    solo:false,
    id:4
  }
  
  freeStyle: ModeInterface = {
    name: "Estilo Libre",
    barsCount:6,
    state:true,
    points:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    solo:false,
    id:5
  }

  fourByFour: ModeInterface = {
    name: "4x4",
    barsCount:8,
    state:true,
    points:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    solo:false,
    id:6
  }

  currentMode: ModeInterface = {
    name:"",
    barsCount:6,
    state:null,
    solo:null,
    points:null,
    id:0
  };
  
  battleModes: ModeInterface[] = [
    this.easyMode,
    this.hardMode,
    this.thematic,
    this.opposingCharacters,
    this.freeStyle,
    this.fourByFour
  ]

  constructor() {}

  selectNextMode(){
    this.currentMode = this.battleModes.find( mode => {
      return mode.id > this.currentMode.id && mode.state
    });
    console.log(this.currentMode)
  }


}
