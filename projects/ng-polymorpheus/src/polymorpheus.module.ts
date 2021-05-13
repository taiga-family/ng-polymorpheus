import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusOutletDirective} from './directives/outlet';
import {PolymorpheusTemplate} from './directives/template';

@NgModule({
    imports: [CommonModule],
    declarations: [PolymorpheusOutletDirective, PolymorpheusTemplate],
    exports: [PolymorpheusOutletDirective, PolymorpheusTemplate],
})
export class PolymorpheusModule {}
