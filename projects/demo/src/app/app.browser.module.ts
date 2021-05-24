import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule, Sanitizer} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {ComboBoxDemoModule} from './modules/comboBoxDemo/comboBoxDemo.module';
import {InputDemoModule} from './modules/inputDemo/inputDemo.module';
import {MenuDemoModule} from './modules/menuDemo/menuDemo.module';
import {StarWarsModule} from './modules/starWars/starWars.module';
import {StarWarsDemoModule} from './modules/starWarsDemo/starWarsDemo.module';
import {TabsDemoModule} from './modules/tabsDemo/tabsDemo.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'demo'}),
        InputDemoModule,
        MenuDemoModule,
        ComboBoxDemoModule,
        TabsDemoModule,
        StarWarsModule,
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
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    less: () => import('highlight.js/lib/languages/less'),
                    xml: () => import('highlight.js/lib/languages/xml'),
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
})
export class AppBrowserModule {}
