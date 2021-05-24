export class PrimitiveContext {
    constructor(public $implicit: unknown) {}

    get polymorpheusOutlet(): unknown {
        return this.$implicit;
    }
}
