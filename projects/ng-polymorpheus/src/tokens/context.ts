import {InjectionToken} from '@angular/core';

// TODO fix typo in 2.0
/**
 * Use this token to access context within your components when
 * instantiating them through {@link PolymorpheusOutletComponent}
 */
export const POLYMOPRHEUS_CONTEXT = new InjectionToken<object>(
    'Context from polymorpheus-outlet',
);
