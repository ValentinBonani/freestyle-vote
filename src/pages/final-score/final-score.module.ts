import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalScorePage } from './final-score';

@NgModule({
  declarations: [
    FinalScorePage,
  ],
  imports: [
    IonicPageModule.forChild(FinalScorePage),
  ],
})
export class FinalScorePageModule {}
