import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {HighlightModule} from 'ngx-highlightjs';
import {ComboBoxModule} from '../comboBox/comboBox.module';
import {TabsModule} from '../tabs/tabs.module';
import {StarWarsDemoComponent} from './starWarsDemo.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        PolymorpheusModule,
        ComboBoxModule,
        TabsModule,
    ],
    declarations: [StarWarsDemoComponent],
    exports: [StarWarsDemoComponent],
})
export class StarWarsDemoModule {}
