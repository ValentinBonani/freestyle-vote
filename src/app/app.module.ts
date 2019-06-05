import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlayerNameComponent } from '../components/player-name/player-name';
import { ChallengeProvider } from '../providers/challenge/challenge';
import { BattleSelectorPage } from '../pages/battle-selector/battle-selector';
import { BattleModesComponent } from '../components/battle-modes/battle-modes';
import { BattlePage } from '../pages/battle/battle';
import { CheckBoxComponent } from '../components/check-box/check-box';
import { BattlePointsDisplayComponent } from '../components/battle-points-display/battle-points-display';
import { BattlePointsSelectorComponent } from '../components/battle-points-selector/battle-points-selector';
import { ModesProvider } from '../providers/modes/modes';
import { ModeStatsPage } from '../pages/mode-stats/mode-stats';
import { DisplayExtrasComponent } from '../components/display-extras/display-extras';
import { PointsBarComponent } from '../components/points-bar/points-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerNameComponent,
    BattleModesComponent,
    BattlePointsDisplayComponent,
    BattlePointsSelectorComponent,
    DisplayExtrasComponent,
    PointsBarComponent,
    CheckBoxComponent,
    BattleSelectorPage,
    BattlePage,
    ModeStatsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BattleSelectorPage,
    BattlePage,
    ModeStatsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChallengeProvider,
    ModesProvider
  ]
})
export class AppModule {}
