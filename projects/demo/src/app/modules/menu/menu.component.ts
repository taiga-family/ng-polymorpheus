import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {IContextWithActive} from '../interfaces';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.template.html',
    styleUrls: ['./menu.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent<T> {
    @Input()
    items: ReadonlyArray<T> = [];

    @Input()
    content: PolymorpheusContent<IContextWithActive<T>> = ({
        $implicit,
    }: IContextWithActive<T>) => String($implicit);

    @Input()
    emptyContent: PolymorpheusContent<never> = 'Nothing is found';

    @Output()
    readonly itemClicked = new EventEmitter<T>();

    private activeItem: T | null = null;

    isActive(item: T): boolean {
        return item === this.activeItem;
    }

    getContext($implicit: T): IContextWithActive<T> {
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
