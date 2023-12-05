import {Injector, TemplateRef} from '@angular/core';

import {POLYMORPHEUS_CONTEXT} from '../tokens/context';

/**
 * Wrapper class for a template that will be used as content for {@link PolymorpheusOutletDirective}
 *
 * @param template — an Angular template to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 */
export class PolymorpheusTemplateContent<T> {
    constructor(
        readonly template: TemplateRef<T>,
        private readonly i?: Injector | null,
    ) {}

    createInjector<C>(injector: Injector, useValue?: C): Injector {
        return Injector.create({
            parent: this.i || injector,
            providers: [
                {
                    provide: POLYMORPHEUS_CONTEXT,
                    useValue,
                },
            ],
        });
    }
}
