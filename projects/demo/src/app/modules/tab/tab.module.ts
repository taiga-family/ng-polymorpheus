import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TabComponent} from './tab.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TabComponent],
    exports: [TabComponent]
})
export class TabModule {}
