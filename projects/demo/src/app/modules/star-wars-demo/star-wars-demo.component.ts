import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AbstractDemo} from '../abstract-demo';
import * as typescript from '../star-wars/star-wars.component.ts?raw';
import * as css from '../star-wars/star-wars.style.less?raw';
import * as html from '../star-wars/star-wars.template.html?raw';

@Component({
    selector: 'app-star-wars-demo',
    templateUrl: './star-wars-demo.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsDemoComponent extends AbstractDemo {
    public readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };
}
