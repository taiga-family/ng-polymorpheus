import * as typescript from '!!raw-loader!../starWars/starWars.component.ts';
import * as css from '!!raw-loader!../starWars/starWars.style.less';
import * as html from '!!raw-loader!../starWars/starWars.template.html';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractDemo} from '../abstractDemo';

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
