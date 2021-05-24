import {NgModule} from '@angular/core';
import {PolymorpheusOutletDirective} from './directives/outlet';
import {PolymorpheusTemplate} from './directives/template';

@NgModule({
    declarations: [PolymorpheusOutletDirective, PolymorpheusTemplate],
    exports: [PolymorpheusOutletDirective, PolymorpheusTemplate],
})
export class PolymorpheusModule {}
