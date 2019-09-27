import * as typescript from '!!raw-loader!../tabs/tabs.component.ts';
import * as css from '!!raw-loader!../tabs/tabs.style.less';
import * as html from '!!raw-loader!../tabs/tabs.template.html';

import * as typescript2 from '!!raw-loader!../tab/tab.component.ts';
import * as css2 from '!!raw-loader!../tab/tab.style.less';
import * as html2 from '!!raw-loader!../tab/tab.template.html';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {AbstractDemo} from '../abstractDemo';
import {ICustomTab} from '../interfaces';
import {TabComponent} from '../tab/tab.component';

const ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path fill="currentColor" d="M9,8c0-0.6-0.4-1-1-1C7.4,7,7,7.4,7,8s0.4,1,1,1C8.6,9,9,8.6,9,8L9,8z M11,8c0,1.7-1.3,3-3,3c-1.7,0-3-1.3-3-3
	s1.3-3,3-3S11,6.3,11,8L11,8z M5.4,1.2l0.1-0.4C5.6,0.3,6,0,6.4,0h3.1c0.5,0,0.9,0.3,1,0.8l0.1,0.4l0.2,1.1c0.2,0.1,0.5,0.3,0.7,0.4
	l1.1-0.4l0.4-0.1c0.4-0.1,0.9,0,1.2,0.5l0.2,0.4l1.1,1.9l0.2,0.4c0.2,0.4,0.2,0.9-0.2,1.3l-0.3,0.3l-0.8,0.7c0,0.2,0,0.3,0,0.4
	s0,0.3,0,0.4l0.8,0.7l0.3,0.3c0.4,0.3,0.4,0.8,0.2,1.3l-0.2,0.4l-1.1,1.8l-0.2,0.4c-0.2,0.4-0.7,0.6-1.2,0.5l-0.5-0.1l-1.1-0.4
	c-0.2,0.2-0.5,0.3-0.7,0.4l-0.2,1.1l-0.1,0.4c-0.1,0.5-0.5,0.8-1,0.8H6.4c-0.5,0-0.9-0.3-1-0.8l-0.1-0.4l-0.2-1.1
	c-0.3-0.1-0.5-0.3-0.7-0.4l-1.1,0.4l-0.4,0.1c-0.4,0.1-0.9,0-1.2-0.5l-0.2-0.4l-1.1-1.9l-0.2-0.4C-0.1,10.3,0,9.8,0.3,9.4l0.3-0.3
	l0.8-0.7c0-0.1,0-0.3,0-0.4c0-0.2,0-0.3,0-0.4L0.7,6.9L0.3,6.6C0,6.2-0.1,5.7,0.1,5.3l0.2-0.4l1.1-1.8l0.2-0.4
	c0.2-0.4,0.7-0.6,1.2-0.5l0.5,0.1l1.1,0.4c0.2-0.2,0.5-0.3,0.7-0.4L5.4,1.2z M7.2,2L7,3.2C6.9,3.6,6.6,3.9,6.3,4
	C5.9,4.1,5.4,4.4,5.1,4.6c-0.3,0.2-0.6,0.3-1,0.2L2.8,4.4L2,5.6l1,0.8C3.3,6.6,3.4,7,3.3,7.3l0,0.1C3.3,7.8,3.2,7.9,3.2,8
	s0,0.2,0.1,0.5l0,0.2C3.4,9,3.3,9.4,3,9.6l-1,0.8l0.8,1.2l1.3-0.4c0.3-0.1,0.7,0,1,0.2c0.4,0.3,0.8,0.5,1.2,0.7
	c0.3,0.1,0.6,0.4,0.7,0.7L7.2,14h1.5L9,12.8c0.1-0.3,0.3-0.6,0.7-0.7c0.4-0.2,0.9-0.4,1.2-0.7c0.3-0.2,0.6-0.3,1-0.2l1.3,0.4
	l0.8-1.2l-1-0.8c-0.3-0.2-0.4-0.6-0.4-0.9l0-0.1c0.1-0.3,0.1-0.4,0.1-0.5c0-0.1,0-0.2-0.1-0.5l0-0.1C12.6,7,12.7,6.6,13,6.4l1-0.8
	l-0.8-1.2l-1.3,0.4c-0.3,0.1-0.7,0-1-0.2C10.6,4.4,10.1,4.1,9.7,4C9.4,3.9,9.1,3.6,9,3.2L8.8,2H7.2z"/>
</svg>`;

@Component({
    selector: 'app-tabs-demo',
    templateUrl: './tabsDemo.template.html',
    styleUrls: ['./tabsDemo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemoComponent extends AbstractDemo {
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

    customTabs: ReadonlyArray<ICustomTab> | null = null;

    get tabCode(): string {
        const code: any = this.anotherExample[this.activeTabTab];

        return typeof code === 'string' ? code : code.default;
    }

    getTabs(content: PolymorpheusContent<never>): ReadonlyArray<ICustomTab> {
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
                content: ICON,
            },
        ];

        this.customTabs = customTabs;

        return customTabs;
    }
}
