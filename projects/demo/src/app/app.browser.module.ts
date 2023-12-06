import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule, Sanitizer} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

import {AppComponent} from './app.component';
import {ComboBoxDemoComponent} from './modules/comboBoxDemo/comboBoxDemo.component';
import {InputDemoComponent} from './modules/inputDemo/inputDemo.component';
import {MenuDemoComponent} from './modules/menuDemo/menuDemo.component';
import {StarWarsComponent} from './modules/starWars/starWars.component';
import {StarWarsDemoModule} from './modules/starWarsDemo/starWarsDemo.module';
import {TabsDemoComponent} from './modules/tabsDemo/tabsDemo.component';

@NgModule({
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
                coreLibraryLoader: async () => import('highlight.js/lib/core'),
                languages: {
                    xml: async () => import('highlight.js/lib/languages/xml'),
                    typescript: async () =>
                        import('highlight.js/lib/languages/typescript'),
                    less: async () => import('highlight.js/lib/languages/less'),
                },
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
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
