import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';
import {HighlightModule} from 'ngx-highlightjs';

import {ComboBoxComponent} from '../comboBox/comboBox.component';
import {TabsComponent} from '../tabs/tabs.component';
import {StarWarsDemoComponent} from './starWarsDemo.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        PolymorpheusOutletDirective,
        ComboBoxComponent,
        TabsComponent,
    ],
    declarations: [StarWarsDemoComponent],
    exports: [StarWarsDemoComponent],
})
export class StarWarsDemoModule {}
