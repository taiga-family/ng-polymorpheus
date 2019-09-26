import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TabsComponent} from './tabs.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TabsComponent],
    exports: [TabsComponent],
})
export class TabsModule {}
