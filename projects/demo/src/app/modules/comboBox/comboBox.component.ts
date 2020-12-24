import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {ContextWithActive} from '../interfaces';

@Component({
    selector: 'app-combo-box',
    templateUrl: './comboBox.template.html',
    styleUrls: ['./comboBox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent<T> {
    stringValue = '';

    opened = false;

    @Input()
    placeholder = '';

    @Input()
    items: ReadonlyArray<T> = [];

    @Input()
    content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @Input()
    emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Input()
    stringify = (item: T) => String(item);

    @Input()
    value: T | null = null;

    @Output()
    valueChange = new EventEmitter<T | null>();

    get valueSelected(): boolean {
        return !!this.value && this.items.includes(this.value);
    }

    get filteredItems(): ReadonlyArray<T> {
        return this.valueSelected
            ? this.items
            : this.items.filter(item =>
                  this.stringify(item)
                      .toLowerCase()
                      .includes(this.stringValue.toLowerCase()),
              );
    }

    onClick() {
        this.opened = !this.opened;
    }

    onArrowDown() {
        this.opened = true;
    }

    onFocusOut() {
        this.opened = false;
    }

    onItemClicked(item: T) {
        this.value = item;
        this.valueChange.emit(item);
        this.stringValue = this.stringify(item);
        this.opened = false;
    }

    onValueChange(stringValue: string) {
        this.stringValue = stringValue;
        this.opened = true;
        this.value =
            this.items.find(item => this.stringify(item) === this.stringValue) || null;
    }
}
