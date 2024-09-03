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
    public readonly inputs: Map<keyof T, T[keyof T]> = new Map();

    constructor(
        public readonly component: Type<T>,
        private readonly i?: Injector,
    ) {}

    public setInput(key: keyof T, value: T[keyof T]): this {
        this.inputs.set(key, value);

        return this;
    }

    public createInjector<C>(injector: Injector, useValue?: C): Injector {
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
