import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';
import {HighlightModule} from 'ngx-highlightjs';

import {AbstractDemo} from '../abstract-demo';
import {avatar, gear} from '../constants';
import type {CustomTab} from '../interfaces';
import {MenuComponent} from '../menu/menu.component';
import {TabComponent} from '../tab/tab.component';
import * as typescript2 from '../tab/tab.component.ts?raw';
import * as css2 from '../tab/tab.style.less?raw';
import * as html2 from '../tab/tab.template.html?raw';
import {TabsComponent} from '../tabs/tabs.component';
import * as typescript from '../tabs/tabs.component.ts?raw';
import * as css from '../tabs/tabs.style.less?raw';
import * as html from '../tabs/tabs.template.html?raw';

@Component({
    standalone: true,
    selector: 'app-tabs-demo',
    imports: [
        HighlightModule,
        PolymorpheusOutlet,
        MenuComponent,
        TabsComponent,
        TabComponent,
    ],
    templateUrl: './tabs-demo.template.html',
    styleUrls: ['./tabs-demo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemoComponent extends AbstractDemo {
    public readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };

    protected readonly avatar = avatar;

    protected readonly items = [
        'Search for Holy Grail',
        'Run away!',
        'Taunt a second time',
    ];

    protected readonly anotherExample = {
        HTML: html2,
        Style: css2,
        TypeScript: typescript2,
    };

    protected readonly content = new PolymorpheusComponent(TabComponent);

    protected activeTabTab: 'HTML' | 'Style' | 'TypeScript' = 'HTML';

    protected customTabs: readonly CustomTab[] | null = null;

    protected get tabCode(): string {
        const code: any = this.anotherExample[this.activeTabTab];

        return typeof code === 'string' ? code : code.default;
    }

    protected getTabs(content: PolymorpheusContent<never>): readonly CustomTab[] {
        const customTabs = [
            {
                text: 'Alex Inkin',
                content,
            },
            {
                text: 'Messages',
                content: 3,
            },
            {
                text: 'Settings',
                content: gear,
            },
        ];

        this.customTabs = customTabs;

        return customTabs;
    }
}
