import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {HighlightModule} from 'ngx-highlightjs';
import {MenuModule} from '../menu/menu.module';
import {TabModule} from '../tab/tab.module';
import {TabsModule} from '../tabs/tabs.module';
import {TabsDemoComponent} from './tabsDemo.component';

@NgModule({
    imports: [HighlightModule, PolymorpheusModule, MenuModule, TabsModule, TabModule],
    declarations: [TabsDemoComponent],
    exports: [TabsDemoComponent],
})
export class TabsDemoModule {}
