import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeStatsPage } from './mode-stats';

@NgModule({
  declarations: [
    ModeStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModeStatsPage),
  ],
})
export class ModeStatsPageModule {}
