export class PolymorpheusContext<T> {
    constructor(public readonly $implicit: T) {}

    public get polymorpheusOutlet(): T {
        return this.$implicit;
    }
}
