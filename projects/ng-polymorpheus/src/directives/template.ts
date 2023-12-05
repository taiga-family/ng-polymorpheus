import {ChangeDetectorRef, Directive, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    standalone: true,
    selector: 'ng-template[polymorpheus]',
    inputs: ['polymorpheus'],
    exportAs: 'polymorpheus',
})
export class PolymorpheusTemplate<C = any> {
    polymorpheus: C | '' = '';

    constructor(
        @Self() readonly template: TemplateRef<C>,
        private readonly cdr: ChangeDetectorRef,
    ) {}

    static ngTemplateContextGuard<T>(
        _dir: PolymorpheusTemplate<T>,
        _ctx: any,
    ): _ctx is T extends '' ? any : T {
        return true;
    }

    check(): void {
        this.cdr.markForCheck();
    }
}
