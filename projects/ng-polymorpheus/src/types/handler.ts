/**
 * A handler function receiving context as input and returning a primitive
 */
export type PolymorpheusHandler<C> = (context: C) => string | number | null | undefined;
