import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    selector: 'ng-template[polymorpheus]',
    exportAs: 'polymorpheus',
    inputs: ['polymorpheus'],
})
export class PolymorpheusTemplate<C extends object = object> {
    polymorpheus!: C | string;

    constructor(
        @Inject(TemplateRef)
        @Self()
        readonly template: TemplateRef<C>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    check() {
        this.changeDetectorRef.markForCheck();
    }

    static ngTemplateContextGuard<T extends object>(
        {polymorpheus}: PolymorpheusTemplate<T>,
        _ctx: any,
    ): _ctx is T {
        return typeof polymorpheus !== 'string';
    }
}
