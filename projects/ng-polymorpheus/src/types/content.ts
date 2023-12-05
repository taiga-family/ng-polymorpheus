import {TemplateRef} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusTemplateContent} from "../classes/template";
import {PolymorpheusHandler} from './handler';
import {PolymorpheusPrimitive} from './primitive';

/**
 * All content types supported by {@link PolymorpheusOutletDirective}
 */
export type PolymorpheusContent<C = any> =
    | TemplateRef<Partial<C>>
    | PolymorpheusTemplate<Partial<C> | ''> // string is untyped, e.g. 'any'
    | PolymorpheusTemplateContent<C>
    | PolymorpheusComponent<unknown>
    | PolymorpheusHandler<C>
    | PolymorpheusPrimitive;
