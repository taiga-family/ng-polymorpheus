import {TemplateRef} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusHandler} from './handler';

/**
 * All content types supported by {@link PolymorpheusOutletDirective}
 */
export type PolymorpheusContent<C = any> =
    | TemplateRef<Partial<C>>
    | PolymorpheusTemplate<Partial<C>>
    | PolymorpheusComponent<any, C>
    | PolymorpheusHandler<C>
    | string
    | number
    | null
    | undefined;
