import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input()
    content: PolymorpheusContent<never> | null = null;

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
