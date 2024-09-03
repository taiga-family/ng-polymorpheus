import type {TemplateRef} from '@angular/core';

import type {Polymorpheus} from '../classes/component';
import type {PolymorpheusTemplate} from '../directives/template';
import type {PolymorpheusHandler} from './handler';
import type {PolymorpheusPrimitive} from './primitive';

/**
 * All content types supported by {@link PolymorpheusOutlet}
 */
export type PolymorpheusContent<C = any> =
    | Polymorpheus<unknown>
    | PolymorpheusHandler<C>
    | PolymorpheusPrimitive
    | PolymorpheusTemplate<Partial<C> | ''> // string is untyped, e.g. 'any'
    | TemplateRef<Partial<C>>;
