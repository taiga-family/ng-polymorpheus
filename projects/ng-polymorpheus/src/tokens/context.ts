import {InjectionToken} from '@angular/core';
import {PolymorpheusObject} from '../types/object';

/**
 * Use this token to access context within your components when
 * instantiating them through {@link PolymorpheusOutletDirective}
 */
export const POLYMORPHEUS_CONTEXT = new InjectionToken<PolymorpheusObject>(
    'Context from *polymorpheusOutlet',
);
