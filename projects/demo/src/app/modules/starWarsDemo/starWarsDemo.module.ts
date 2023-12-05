import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';
import {StarWarsDemoComponent} from './starWarsDemo.component';
import {PolymorpheusOutletDirective} from "@tinkoff/ng-polymorpheus";
import {ComboBoxComponent} from "../comboBox/comboBox.component";
import {TabsComponent} from "../tabs/tabs.component";

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
