import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PolymorpheusContent, PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'app-input',
    imports: [FormsModule, PolymorpheusOutlet],
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input()
    content: PolymorpheusContent<never> = null;

    @Input()
    placeholder = '';

    @Input()
    value = '';

    @Output()
    readonly valueChange = new EventEmitter<string>();

    onMouseDown(event: MouseEvent, input: HTMLInputElement): void {
        event.preventDefault();
        input.focus();
    }

    onValueChange(value: string): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
