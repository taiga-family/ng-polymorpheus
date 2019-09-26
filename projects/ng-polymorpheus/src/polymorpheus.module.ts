import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusTemplate} from './directives/template';
import {PolymorpheusOutletComponent} from './outlet/outlet.component';
import {InjectorPipe} from './pipes/injector';

@NgModule({
    imports: [CommonModule],
    declarations: [PolymorpheusOutletComponent, PolymorpheusTemplate, InjectorPipe],
    exports: [PolymorpheusOutletComponent, PolymorpheusTemplate],
})
export class PolymorpheusModule {}
