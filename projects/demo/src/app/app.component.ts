import * as logo from '!!file-loader!../../assets/logo.svg';
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    readonly logo = logo;
}
