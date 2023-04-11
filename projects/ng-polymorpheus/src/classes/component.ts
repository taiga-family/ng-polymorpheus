import {Injector, Type} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '../tokens/context';

/**
 * Wrapper class for a component that will be used as content for {@link PolymorpheusOutletDirective}
 *
 * @param component — an Angular component to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 *
 * TODO: Remove second generic as it is irrelevant, remove `null` from injector type
 */
export class PolymorpheusComponent<T, _C = any> {
    constructor(readonly component: Type<T>, private readonly i?: Injector | null) {}

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
