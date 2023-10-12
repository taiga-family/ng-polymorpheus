import * as typescript from '../menu/menu.component.ts?raw';
import * as css from '../menu/menu.style.less?raw';
import * as html from '../menu/menu.template.html?raw';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractDemo} from '../abstractDemo';

@Component({
    selector: 'app-menu-demo',
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
