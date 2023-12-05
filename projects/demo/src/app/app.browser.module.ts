import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule, Sanitizer} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {StarWarsDemoModule} from './modules/starWarsDemo/starWarsDemo.module';
import {StarWarsComponent} from "./modules/starWars/starWars.component";
import {ComboBoxDemoComponent} from "./modules/comboBoxDemo/comboBoxDemo.component";
import {InputDemoComponent} from "./modules/inputDemo/inputDemo.component";
import {MenuDemoComponent} from "./modules/menuDemo/menuDemo.component";
import {TabsDemoComponent} from "./modules/tabsDemo/tabsDemo.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'demo'}),
        InputDemoComponent,
        MenuDemoComponent,
        ComboBoxDemoComponent,
        TabsDemoComponent,
        StarWarsComponent,
        StarWarsDemoModule,
        HighlightModule,
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    xml: () => import('highlight.js/lib/languages/xml'),
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    less: () => import('highlight.js/lib/languages/less'),
                }
            },
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export class AppBrowserModule {}
