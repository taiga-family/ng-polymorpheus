import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Sanitizer} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
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
}).catch((err: unknown) => console.error(err));
