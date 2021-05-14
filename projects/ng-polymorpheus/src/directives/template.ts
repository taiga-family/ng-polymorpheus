import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    selector: 'ng-template[polymorpheus]',
    exportAs: 'polymorpheus',
    inputs: ['polymorpheus'],
})
export class PolymorpheusTemplate<C extends Record<any, any>> {
    polymorpheus: C | string = '';

    constructor(
        @Inject(TemplateRef)
        @Self()
        readonly template: TemplateRef<C>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    check() {
        this.changeDetectorRef.markForCheck();
    }

    static ngTemplateContextGuard<T>(
        _dir: PolymorpheusTemplate<T>,
        _ctx: any,
    ): _ctx is T extends string ? any : T {
        return true;
    }
}
