export class PolymorpheusContext<T> {
    constructor(readonly $implicit: T) {}

    get polymorpheusOutlet(): T {
        return this.$implicit;
    }
}

/**
 * @deprecated: use {@link PolymorpheusContext} instead
 * Primitive types used as content by {@link PolymorpheusOutletDirective}
 */
export class PrimitiveContext<T> extends PolymorpheusContext<T> {}
