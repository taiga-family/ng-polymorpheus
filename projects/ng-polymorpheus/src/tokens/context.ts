import {InjectionToken} from '@angular/core';

/**
 * Use this token to access context within your components when
 * instantiating them through {@link PolymorpheusOutletComponent}
 */
export const POLYMORPHEUS_CONTEXT = new InjectionToken<object>(
    'Context from polymorpheus-outlet',
);
