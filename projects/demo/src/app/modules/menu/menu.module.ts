import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {MenuComponent} from './menu.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [MenuComponent],
    exports: [MenuComponent],
})
export class MenuModule {}
