import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ComboBoxDemoComponent} from './modules/combo-box-demo/combo-box-demo.component';
import {logo} from './modules/constants';
import {InputDemoComponent} from './modules/input-demo/input-demo.component';
import {MenuDemoComponent} from './modules/menu-demo/menu-demo.component';
import {StarWarsComponent} from './modules/star-wars/star-wars.component';
import {StarWarsDemoComponent} from './modules/star-wars-demo/star-wars-demo.component';
import {TabsDemoComponent} from './modules/tabs-demo/tabs-demo.component';

@Component({
    selector: 'my-app',
    imports: [
        ComboBoxDemoComponent,
        InputDemoComponent,
        MenuDemoComponent,
        StarWarsComponent,
        StarWarsDemoComponent,
        TabsDemoComponent,
    ],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected readonly logo = logo;
}
