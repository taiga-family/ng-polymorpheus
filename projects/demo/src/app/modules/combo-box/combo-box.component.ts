import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';

import {InputComponent} from '../input/input.component';
import type {ContextWithActive} from '../interfaces';
import {MenuComponent} from '../menu/menu.component';

@Component({
    standalone: true,
    selector: 'app-combo-box',
    imports: [CommonModule, InputComponent, MenuComponent, PolymorpheusOutlet],
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent<T> {
    protected stringValue = '';
    protected opened = false;

    @Input()
    public placeholder = '';

    @Input()
    public items: readonly T[] = [];

    @Input()
    public emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Input()
    public value: T | null = null;

    @Output()
    public readonly valueChange = new EventEmitter<T | null>();

    @Input()
    public content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @Input()
    public stringify: (item: T) => string = (item: T) => String(item);

    protected get valueSelected(): boolean {
        return !!this.value && this.items.includes(this.value);
    }

    protected get filteredItems(): readonly T[] {
        return this.valueSelected
            ? this.items
            : this.items.filter(item =>
                  this.stringify(item)
                      .toLowerCase()
                      .includes(this.stringValue.toLowerCase()),
              );
    }

    protected onClick(): void {
        this.opened = !this.opened;
    }

    protected onArrowDown(): void {
        this.opened = true;
    }

    protected onFocusOut(): void {
        this.opened = false;
    }

    protected onItemClicked(item: T): void {
        this.value = item;
        this.valueChange.emit(item);
        this.stringValue = this.stringify(item);
        this.opened = false;
    }

    protected onValueChange(stringValue: string): void {
        this.stringValue = stringValue;
        this.opened = true;
        this.value =
            this.items.find(item => this.stringify(item) === this.stringValue) || null;
    }
}
