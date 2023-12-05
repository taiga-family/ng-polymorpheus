import * as typescript from '../input/input.component.ts?raw';
import * as css from '../input/input.style.less?raw';
import * as html from '../input/input.template.html?raw';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractDemo} from '../abstractDemo';
import {HighlightModule} from "ngx-highlightjs";
import {InputComponent} from "../input/input.component";
import {TabsComponent} from "../tabs/tabs.component";

@Component({
    selector: 'app-input-demo',
    templateUrl: './inputDemo.template.html',
    styleUrls: ['./inputDemo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HighlightModule, InputComponent, TabsComponent],
})
export class InputDemoComponent extends AbstractDemo {
    readonly searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.9,14.5l2.8,2.8c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-2.8-2.8c-2.7,1.9-6.4,1.3-8.4-1.4
            S4.8,8,7.5,6.1s6.4-1.3,8.4,1.4C17.4,9.6,17.4,12.4,15.9,14.5L15.9,14.5z M11,15c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4
            S8.8,15,11,15z"/>
    </svg>`;

    readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };
}
