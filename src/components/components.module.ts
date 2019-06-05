import { NgModule } from '@angular/core';
import { BattleModesComponent } from './battle-modes/battle-modes';
import { CheckBoxComponent } from './check-box/check-box';
import { BattlePointsSelectorComponent } from './battle-points-selector/battle-points-selector';
import { BattlePointsDisplayComponent } from './battle-points-display/battle-points-display';
import { DisplayExtrasComponent } from './display-extras/display-extras';
@NgModule({
	declarations: [BattleModesComponent,
    CheckBoxComponent,
    BattlePointsSelectorComponent,
    BattlePointsDisplayComponent,
    DisplayExtrasComponent],
	imports: [],
	exports: [BattleModesComponent,
    CheckBoxComponent,
    BattlePointsSelectorComponent,
    BattlePointsDisplayComponent,
    DisplayExtrasComponent]
})
export class ComponentsModule {}
