import {TemplateRef} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusHandler} from './handler';
import {PolymorpheusObject} from './object';
import {PolymorpheusPrimitive} from './primitive';

/**
 * All content types supported by {@link PolymorpheusOutletDirective}
 */
export type PolymorpheusContent<C extends PolymorpheusObject = {}> =
    | TemplateRef<C>
    | PolymorpheusTemplate<C>
    | PolymorpheusComponent<PolymorpheusObject, C>
    | PolymorpheusHandler<C>
    | PolymorpheusPrimitive;
