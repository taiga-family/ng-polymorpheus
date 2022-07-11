import {PolymorpheusObject} from './object';

/**
 * A handler function receiving context as input and returning a primitive
 */
export type PolymorpheusHandler<C extends PolymorpheusObject> = (
    context: C,
) => string | number;
