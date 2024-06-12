import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import type {ContextWithActive} from '../interfaces';

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
    public items: readonly T[] = [];

    @Input()
    public emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Output()
    public readonly itemClicked = new EventEmitter<T>();

    @Input()
    public content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @HostListener('mouseleave')
    protected onMouseLeave(): void {
        this.activeItem = null;
    }

    protected isActive(item: T): boolean {
        return item === this.activeItem;
    }

    protected getContext($implicit: T): ContextWithActive<T> {
        return {
            $implicit,
            active: this.isActive($implicit),
        };
    }

    protected onMouseEnter(item: T): void {
        this.activeItem = item;
    }
}
