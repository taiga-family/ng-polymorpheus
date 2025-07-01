/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {InjectOptions} from '@angular/core';
import {inject, InjectionToken} from '@angular/core';

/**
 * Use this token to access context within your components when
 * instantiating them through {@link PolymorpheusOutlet}
 */
export const POLYMORPHEUS_CONTEXT = new InjectionToken<Record<any, any>>(
    ngDevMode ? 'POLYMORPHEUS_CONTEXT' : '',
);

export function injectContext<T>(options?: InjectOptions & {optional?: false}): T;
export function injectContext<T>(options?: InjectOptions & {optional: true}): T | null;
export function injectContext<T>(options: InjectOptions = {}): T | null {
    return inject(POLYMORPHEUS_CONTEXT, options);
}
