import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent, PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, PolymorpheusOutletDirective]
})
export class InputComponent {
    @Input()
    content: PolymorpheusContent<never> = null;

    @Input()
    placeholder = '';

    @Input()
    value = '';

    @Output()
    valueChange = new EventEmitter<string>();

    onMouseDown(event: MouseEvent, input: HTMLInputElement) {
        event.preventDefault();
        input.focus();
    }

    onValueChange(value: string) {
        this.value = value;
        this.valueChange.emit(value);
    }
}
