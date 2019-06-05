import { NgModule } from '@angular/core';
import { BattleModesComponent } from './battle-modes/battle-modes';
import { CheckBoxComponent } from './check-box/check-box';
import { BattlePointsSelectorComponent } from './battle-points-selector/battle-points-selector';
import { BattlePointsDisplayComponent } from './battle-points-display/battle-points-display';
import { DisplayExtrasComponent } from './display-extras/display-extras';
import { PointsBarComponent } from './points-bar/points-bar';
@NgModule({
	declarations: [BattleModesComponent,
    CheckBoxComponent,
    BattlePointsSelectorComponent,
    BattlePointsDisplayComponent,
    DisplayExtrasComponent,
    PointsBarComponent],
	imports: [],
	exports: [BattleModesComponent,
    CheckBoxComponent,
    BattlePointsSelectorComponent,
    BattlePointsDisplayComponent,
    DisplayExtrasComponent,
    PointsBarComponent]
})
export class ComponentsModule {}
