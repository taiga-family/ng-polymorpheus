import * as typescript from '!!raw-loader!../menu/menu.component.ts';
import * as css from '!!raw-loader!../menu/menu.style.less';
import * as html from '!!raw-loader!../menu/menu.template.html';

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
