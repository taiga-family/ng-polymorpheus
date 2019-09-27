import {Component} from '@angular/core';
import {logo} from './modules/constants';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    readonly logo = logo;
}
