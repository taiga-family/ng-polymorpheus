import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule, Sanitizer} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

import {AppComponent} from './app.component';
import {ComboBoxDemoComponent} from './modules/combo-box-demo/combo-box-demo.component';
import {InputDemoComponent} from './modules/input-demo/input-demo.component';
import {MenuDemoComponent} from './modules/menu-demo/menu-demo.component';
import {StarWarsComponent} from './modules/star-wars/star-wars.component';
import {StarWarsDemoModule} from './modules/star-wars-demo/star-wars-demo.module';
import {TabsDemoComponent} from './modules/tabs-demo/tabs-demo.component';

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
