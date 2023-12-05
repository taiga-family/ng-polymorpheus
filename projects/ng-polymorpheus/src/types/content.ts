import {TemplateRef} from '@angular/core';

import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplateContent} from '../classes/template';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusHandler} from './handler';
import {PolymorpheusPrimitive} from './primitive';

/**
 * All content types supported by {@link PolymorpheusOutletDirective}
 */
export type PolymorpheusContent<C = any> =
    | PolymorpheusComponent<unknown>
    | PolymorpheusHandler<C>
    | PolymorpheusPrimitive
    | PolymorpheusTemplate<Partial<C> | ''> // string is untyped, e.g. 'any'
    | PolymorpheusTemplateContent<C>
    | TemplateRef<Partial<C>>;
