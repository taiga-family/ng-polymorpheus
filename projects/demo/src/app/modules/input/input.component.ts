import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';

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
    public content: PolymorpheusContent<never> = null;

    @Input()
    public placeholder = '';

    @Input()
    public value = '';

    @Output()
    public readonly valueChange = new EventEmitter<string>();

    protected onMouseDown(event: MouseEvent, input: HTMLInputElement): void {
        event.preventDefault();
        input.focus();
    }

    protected onValueChange(value: string): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
