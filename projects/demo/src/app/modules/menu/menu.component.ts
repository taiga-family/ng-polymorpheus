import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {ContextWithActive} from '../interfaces';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.template.html',
    styleUrls: ['./menu.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent<T> {
    private activeItem: T | null = null;

    @Input()
    items: ReadonlyArray<T> = [];

    @Input()
    content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @Input()
    emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Output()
    readonly itemClicked = new EventEmitter<T>();

    isActive(item: T): boolean {
        return item === this.activeItem;
    }

    getContext($implicit: T): ContextWithActive<T> {
        return {
            $implicit,
            active: this.isActive($implicit),
        };
    }

    onMouseEnter(item: T) {
        this.activeItem = item;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.activeItem = null;
    }
}
