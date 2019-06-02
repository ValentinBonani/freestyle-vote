import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BattleSelectorPage } from './battle-selector';

@NgModule({
  declarations: [
    BattleSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(BattleSelectorPage),
  ],
})
export class BattleSelectorPageModule {}
