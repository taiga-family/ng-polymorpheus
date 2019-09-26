import {NgModule} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';
import {InputModule} from '../input/input.module';
import {TabsModule} from '../tabs/tabs.module';
import {InputDemoComponent} from './inputDemo.component';

@NgModule({
    imports: [HighlightModule, InputModule, TabsModule],
    declarations: [InputDemoComponent],
    exports: [InputDemoComponent],
})
export class InputDemoModule {}
