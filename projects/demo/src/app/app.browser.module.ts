import * as less from 'highlight.js/lib/languages/less';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as xml from 'highlight.js/lib/languages/xml';

import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgDompurifyDomSanitizer} from '@tinkoff/ng-dompurify';
import {HighlightLanguage, HighlightModule} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {ComboBoxDemoModule} from './modules/comboBoxDemo/comboBoxDemo.module';
import {InputDemoModule} from './modules/inputDemo/inputDemo.module';
import {MenuDemoModule} from './modules/menuDemo/menuDemo.module';
import {StarWarsModule} from './modules/starWars/starWars.module';
import {StarWarsDemoModule} from './modules/starWarsDemo/starWarsDemo.module';
import {TabsDemoModule} from './modules/tabsDemo/tabsDemo.module';

export function hljsLanguages(): ReadonlyArray<HighlightLanguage> {
    return [
        {name: 'typescript', func: typescript},
        {name: 'less', func: less},
        {name: 'xml', func: xml},
    ];
}

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
        HighlightModule.forRoot({
            languages: hljsLanguages,
        }),
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: DomSanitizer,
            useClass: NgDompurifyDomSanitizer,
        },
    ],
})
export class AppBrowserModule {}
