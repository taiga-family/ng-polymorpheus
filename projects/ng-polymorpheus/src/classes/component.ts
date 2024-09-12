import type {Type} from '@angular/core';
import {Injector} from '@angular/core';

import {POLYMORPHEUS_CONTEXT} from '../tokens/context';

/**
 * Wrapper class for a component that will be used as content for {@link PolymorpheusOutlet}
 *
 * @param component — an Angular component to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 */
export class PolymorpheusComponent<T> {
    constructor(
        public readonly component: Type<T>,
        private readonly i?: Injector,
    ) {}

    public readonly createInjector = <C>(injector: Injector, useValue?: C): Injector =>
        Injector.create({
            providers: [{provide: POLYMORPHEUS_CONTEXT, useValue}],
            parent: this.i ?? injector,
        });
}
