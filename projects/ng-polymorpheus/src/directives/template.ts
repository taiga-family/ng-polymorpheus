import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';
import {PolymorpheusObject} from "../types/object";

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    selector: 'ng-template[polymorpheus]',
    exportAs: 'polymorpheus',
    inputs: ['polymorpheus'],
})
export class PolymorpheusTemplate<C extends PolymorpheusObject> {
    polymorpheus: C | '' = '';

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
    ): _ctx is T extends string ? unknown : T {
        return true;
    }
}
