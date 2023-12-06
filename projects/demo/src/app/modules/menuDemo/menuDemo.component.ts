import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';

import {AbstractDemo} from '../abstractDemo';
import {MenuComponent} from '../menu/menu.component';
import * as typescript from '../menu/menu.component.ts?raw';
import * as css from '../menu/menu.style.less?raw';
import * as html from '../menu/menu.template.html?raw';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
    standalone: true,
    selector: 'app-menu-demo',
    imports: [HighlightModule, MenuComponent, TabsComponent],
    templateUrl: './menuDemo.template.html',
    styleUrls: ['./menuDemo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDemoComponent extends AbstractDemo {
    readonly items = ['Search for Holy Grail', 'Run away!', 'Taunt a second time'];

    readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };
}
