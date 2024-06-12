import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {HighlightModule} from 'ngx-highlightjs';

import {ComboBoxComponent} from '../combo-box/combo-box.component';
import {TabsComponent} from '../tabs/tabs.component';
import {StarWarsDemoComponent} from './star-wars-demo.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        PolymorpheusOutlet,
        ComboBoxComponent,
        TabsComponent,
    ],
    declarations: [StarWarsDemoComponent],
    exports: [StarWarsDemoComponent],
})
export class StarWarsDemoModule {}
