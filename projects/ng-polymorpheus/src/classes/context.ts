/**
 * @deprecated: use {@link PolymorpheusContext} instead
 * Primitive types used as content by {@link PolymorpheusOutletDirective}
 */
export class PrimitiveContext {
    constructor(public $implicit: unknown) {}

    get polymorpheusOutlet(): unknown {
        return this.$implicit;
    }
}

export class PolymorpheusContext<T> {
    constructor(readonly $implicit: T) {}

    get polymorpheusOutlet(): T {
        return this.$implicit;
    }
}
