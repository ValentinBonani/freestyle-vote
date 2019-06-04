import { Injectable } from '@angular/core';
import { ModeInterface } from '../../interfaces/mode';


@Injectable()
export class ModesProvider {
  
  constructor() {}

  currentBar = 0;
  competitorFullyPointed = false;

  thereAreMoreBars() {
    return (this.currentBar + 1) < this.currentMode.barsCount;
  }

  thereAreLessBars() {
    return this.currentBar > 0;
  }

  checkToChangeMode() {
    if (!this.competitorFullyPointed) {
      this.selectNextMode();
      return false;
    }
    return true;
  }

  resetBars() {
    this.currentBar = 0;
    this.competitorFullyPointed = !this.competitorFullyPointed;
    return this.checkToChangeMode();
  }


  continueBars(){
    this.currentBar++;
    return false;
  }
  backBars(){
    this.currentBar--;
    return false;
  }
  
  setNextBarSolo = () => {
    if(this.thereAreMoreBars()) return this.continueBars();
    else return this.resetBars();
  }

  setLastBarSolo = () => {
    if(this.thereAreLessBars()) return this.backBars();
    else {
      this.currentBar = this.currentMode.barsCount - 1;
      return true;
    } 
  }

  easyMode: ModeInterface = {
    name: "Easy Mode",
    barsCount:6,
    state: true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    setNextBar:this.setNextBarSolo,
    setLastBar:this.setLastBarSolo,
    id:1,
  }

  hardMode: ModeInterface = {
    name: "Hard Mode",
    barsCount:6,
    state: true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    setNextBar:this.setNextBarSolo,
    setLastBar:this.setLastBarSolo,
    id:2,
  }

  thematic: ModeInterface = { 
    name: "Tematicas",
    barsCount:6,
    state:true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    setNextBar:this.setNextBarSolo,
    setLastBar:this.setLastBarSolo,
    id:3,
  }

  opposingCharacters: ModeInterface = { 
    name: "Personajes Contrapuestos",
    barsCount:6,
    state:true,
    points:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
    setNextBar:this.setNextBarSolo,
    setLastBar:this.setLastBarSolo,
    id:4,
  }
  
  freeStyle: ModeInterface = {
    name: "Estilo Libre",
    barsCount:6,
    state:true,
    points:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    setNextBar:this.setNextBarSolo,
    setLastBar:this.setLastBarSolo,
    id:5,
  }

  fourByFour: ModeInterface = {
    name: "4x4",
    barsCount:8,
    state:true,
    points:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    setNextBar:this.setNextBarSolo,
    setLastBar:this.setLastBarSolo,
    id:6,
  }

  currentMode: ModeInterface = {
    name:"",
    barsCount:6,
    state:null,
    setNextBar:null,
    points:null,
    setLastBar:this.setLastBarSolo,
    id:0,
  };
  
  battleModes: ModeInterface[] = [
    this.easyMode,
    this.hardMode,
    this.thematic,
    this.opposingCharacters,
    this.freeStyle,
    this.fourByFour
  ]


  selectNextMode() {
    this.currentMode = this.battleModes.find(this.nextActiveMode);
  }

  nextActiveMode = (mode) => {
    return mode.id > this.currentMode.id && mode.state;
  }


}
