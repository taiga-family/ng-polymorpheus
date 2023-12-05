import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent, PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';

import {ContextWithActive} from '../interfaces';

@Component({
    standalone: true,
    selector: 'app-menu',
    imports: [CommonModule, PolymorpheusOutlet],
    templateUrl: './menu.template.html',
    styleUrls: ['./menu.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent<T> {
    private activeItem: T | null = null;

    @Input()
    items: readonly T[] = [];

    @Input()
    emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Output()
    readonly itemClicked = new EventEmitter<T>();

    @Input()
    content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.activeItem = null;
    }

    isActive(item: T): boolean {
        return item === this.activeItem;
    }

    getContext($implicit: T): ContextWithActive<T> {
        return {
            $implicit,
            active: this.isActive($implicit),
        };
    }

    onMouseEnter(item: T): void {
        this.activeItem = item;
    }
}
