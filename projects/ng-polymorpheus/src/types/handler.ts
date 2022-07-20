/**
 * A handler function receiving context as input and returning a primitive
 */
export type PolymorpheusHandler<C extends Record<any, any>> = (
    context: C,
) => string | number | null | undefined;
