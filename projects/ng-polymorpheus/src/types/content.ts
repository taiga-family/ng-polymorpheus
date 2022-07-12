import {TemplateRef} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusHandler} from './handler';

/**
 * All content types supported by {@link PolymorpheusOutletDirective}
 */
export type PolymorpheusContent<C extends Record<any, any> = {}> =
    | TemplateRef<C>
    | PolymorpheusTemplate<C>
    | PolymorpheusComponent<Record<any, any>, C>
    | PolymorpheusHandler<C>
    | string
    | number
    | null
    | undefined;
