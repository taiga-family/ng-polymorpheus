import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent, PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';

import {ContextWithActive} from '../interfaces';

@Component({
    standalone: true,
    selector: 'app-tabs',
    imports: [CommonModule, PolymorpheusOutletDirective],
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent<T> {
    @Input()
    tabs: readonly T[] = [];

    @Input()
    activeTab: T | null = null;

    @Output()
    readonly activeTabChange = new EventEmitter<T>();

    @Input()
    content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    isActive(tab: T): boolean {
        return tab === this.activeTab;
    }

    getContext($implicit: T): ContextWithActive<T> {
        return {
            $implicit,
            active: this.isActive($implicit),
        };
    }

    onClick(tab: T): void {
        this.activeTab = tab;
        this.activeTabChange.emit(tab);
    }
}
