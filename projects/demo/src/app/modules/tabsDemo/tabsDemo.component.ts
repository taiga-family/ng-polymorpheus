import * as typescript from '!!raw-loader!../tabs/tabs.component.ts';
import * as css from '!!raw-loader!../tabs/tabs.style.less';
import * as html from '!!raw-loader!../tabs/tabs.template.html';

import * as typescript2 from '!!raw-loader!../tab/tab.component.ts';
import * as css2 from '!!raw-loader!../tab/tab.style.less';
import * as html2 from '!!raw-loader!../tab/tab.template.html';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {AbstractDemo} from '../abstractDemo';
import {avatar, gear} from '../constants';
import {CustomTab} from '../interfaces';
import {TabComponent} from '../tab/tab.component';

@Component({
    selector: 'app-tabs-demo',
    templateUrl: './tabsDemo.template.html',
    styleUrls: ['./tabsDemo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemoComponent extends AbstractDemo {
    readonly avatar = avatar;

    readonly items = ['Search for Holy Grail', 'Run away!', 'Taunt a second time'];

    readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };

    readonly anotherExample = {
        HTML: html2,
        Style: css2,
        TypeScript: typescript2,
    };

    readonly content = new PolymorpheusComponent(TabComponent);

    activeTabTab: 'HTML' | 'Style' | 'TypeScript' = 'HTML';

    customTabs: ReadonlyArray<CustomTab> | null = null;

    get tabCode(): string {
        const code: any = this.anotherExample[this.activeTabTab];

        return typeof code === 'string' ? code : code.default;
    }

    getTabs(content: PolymorpheusContent<never>): ReadonlyArray<CustomTab> {
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
