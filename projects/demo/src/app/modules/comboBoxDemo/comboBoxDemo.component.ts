import * as typescript from '!!raw-loader!../comboBox/comboBox.component.ts';
import * as css from '!!raw-loader!../comboBox/comboBox.style.less';
import * as html from '!!raw-loader!../comboBox/comboBox.template.html';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractDemo} from '../abstractDemo';

@Component({
    selector: 'app-combo-box-demo',
    templateUrl: './comboBoxDemo.template.html',
    styleUrls: ['./comboBoxDemo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxDemoComponent extends AbstractDemo {
    readonly items = [
        'Graham Chapman',
        'John Cleese',
        'Terry Gilliam',
        'Eric Idle',
        'Terry Jones',
        'Michael Palin',
    ];

    readonly example = {
        HTML: html,
        Style: css,
        TypeScript: typescript,
    };
}
