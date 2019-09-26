import {NgModule} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';
import {ComboBoxModule} from '../comboBox/comboBox.module';
import {TabsModule} from '../tabs/tabs.module';
import {ComboBoxDemoComponent} from './comboBoxDemo.component';

@NgModule({
    imports: [HighlightModule, ComboBoxModule, TabsModule],
    declarations: [ComboBoxDemoComponent],
    exports: [ComboBoxDemoComponent],
})
export class ComboBoxDemoModule {}
