import {NgModule} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';
import {MenuModule} from '../menu/menu.module';
import {TabsModule} from '../tabs/tabs.module';
import {MenuDemoComponent} from './menuDemo.component';

@NgModule({
    imports: [HighlightModule, MenuModule, TabsModule],
    declarations: [MenuDemoComponent],
    exports: [MenuDemoComponent],
})
export class MenuDemoModule {}
