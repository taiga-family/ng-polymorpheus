import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent, PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';

import {InputComponent} from '../input/input.component';
import {ContextWithActive} from '../interfaces';
import {MenuComponent} from '../menu/menu.component';

@Component({
    standalone: true,
    selector: 'app-combo-box',
    imports: [CommonModule, InputComponent, MenuComponent, PolymorpheusOutletDirective],
    templateUrl: './comboBox.template.html',
    styleUrls: ['./comboBox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent<T> {
    @Input()
    placeholder = '';

    @Input()
    items: readonly T[] = [];

    @Input()
    emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Input()
    value: T | null = null;

    @Output()
    readonly valueChange = new EventEmitter<T | null>();

    stringValue = '';

    opened = false;

    @Input()
    content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @Input()
    stringify: (item: T) => string = (item: T) => String(item);

    get valueSelected(): boolean {
        return !!this.value && this.items.includes(this.value);
    }

    get filteredItems(): readonly T[] {
        return this.valueSelected
            ? this.items
            : this.items.filter(item =>
                  this.stringify(item)
                      .toLowerCase()
                      .includes(this.stringValue.toLowerCase()),
              );
    }

    onClick(): void {
        this.opened = !this.opened;
    }

    onArrowDown(): void {
        this.opened = true;
    }

    onFocusOut(): void {
        this.opened = false;
    }

    onItemClicked(item: T): void {
        this.value = item;
        this.valueChange.emit(item);
        this.stringValue = this.stringify(item);
        this.opened = false;
    }

    onValueChange(stringValue: string): void {
        this.stringValue = stringValue;
        this.opened = true;
        this.value =
            this.items.find(item => this.stringify(item) === this.stringValue) || null;
    }
}
