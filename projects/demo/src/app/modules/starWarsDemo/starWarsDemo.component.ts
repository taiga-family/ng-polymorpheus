import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AbstractDemo} from '../abstractDemo';
import * as typescript from '../starWars/starWars.component.ts?raw';
import * as css from '../starWars/starWars.style.less?raw';
import * as html from '../starWars/starWars.template.html?raw';

@Component({
    selector: 'app-star-wars-demo',
    templateUrl: './starWarsDemo.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsDemoComponent extends AbstractDemo {
    readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };
}
