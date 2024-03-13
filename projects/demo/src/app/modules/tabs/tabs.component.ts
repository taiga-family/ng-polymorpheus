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

import type {ContextWithActive} from '../interfaces';

@Component({
    standalone: true,
    selector: 'app-tabs',
    imports: [CommonModule, PolymorpheusOutlet],
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent<T> {
    @Input()
    public tabs: readonly T[] = [];

    @Input()
    public activeTab: T | null = null;

    @Output()
    public readonly activeTabChange = new EventEmitter<T>();

    @Input()
    public content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    protected isActive(tab: T): boolean {
        return tab === this.activeTab;
    }

    protected getContext($implicit: T): ContextWithActive<T> {
        return {
            $implicit,
            active: this.isActive($implicit),
        };
    }

    protected onClick(tab: T): void {
        this.activeTab = tab;
        this.activeTabChange.emit(tab);
    }
}
