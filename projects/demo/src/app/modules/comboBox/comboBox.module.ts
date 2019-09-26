import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InputModule} from '../input/input.module';
import {MenuModule} from '../menu/menu.module';
import {ComboBoxComponent} from './comboBox.component';

@NgModule({
    imports: [CommonModule, InputModule, MenuModule, PolymorpheusModule],
    declarations: [ComboBoxComponent],
    exports: [ComboBoxComponent],
})
export class ComboBoxModule {}
