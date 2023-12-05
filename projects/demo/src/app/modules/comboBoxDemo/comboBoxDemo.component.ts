import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';

import {AbstractDemo} from '../abstractDemo';
import {ComboBoxComponent} from '../comboBox/comboBox.component';
import * as typescript from '../comboBox/comboBox.component.ts?raw';
import * as css from '../comboBox/comboBox.style.less?raw';
import * as html from '../comboBox/comboBox.template.html?raw';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
    standalone: true,
    selector: 'app-combo-box-demo',
    imports: [ComboBoxComponent, TabsComponent, HighlightModule],
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
