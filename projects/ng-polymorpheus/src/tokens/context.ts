import {InjectionToken} from '@angular/core';

/**
 * Use this token to access context within your components when
 * instantiating them through {@link PolymorpheusOutlet}
 */
export const POLYMORPHEUS_CONTEXT = new InjectionToken<Record<any, any>>(
    'POLYMORPHEUS_CONTEXT',
);
