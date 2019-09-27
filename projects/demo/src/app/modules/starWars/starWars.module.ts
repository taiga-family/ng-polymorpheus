import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ComboBoxModule} from '../comboBox/comboBox.module';
import {StarWarsComponent} from './starWars.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        ComboBoxModule,
    ],
    declarations: [StarWarsComponent],
    exports: [StarWarsComponent],
})
export class StarWarsModule {}
