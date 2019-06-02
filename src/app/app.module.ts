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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerNameComponent,
    BattleModesComponent,
    BattleSelectorPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BattleSelectorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChallengeProvider
  ]
})
export class AppModule {}
