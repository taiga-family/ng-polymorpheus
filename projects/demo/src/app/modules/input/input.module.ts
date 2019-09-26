import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InputComponent} from './input.component';

@NgModule({
    imports: [FormsModule, PolymorpheusModule],
    declarations: [InputComponent],
    exports: [InputComponent],
})
export class InputModule {}
