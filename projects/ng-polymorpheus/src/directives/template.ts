import {ChangeDetectorRef, Directive, Injector, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    selector: 'ng-template[polymorpheus]',
    exportAs: 'polymorpheus',
    inputs: ['polymorpheus', 'injector'],
    standalone: true
})
export class PolymorpheusTemplate<C = any> {
    polymorpheus: C | '' = '';

    injector?: Injector;

    constructor(
        @Self() readonly template: TemplateRef<C>,
        private readonly cdr: ChangeDetectorRef,
    ) {}

    check(): void {
        this.cdr.markForCheck();
    }

    static ngTemplateContextGuard<T>(
        _dir: PolymorpheusTemplate<T>,
        _ctx: any,
    ): _ctx is T extends '' ? any : T {
        return true;
    }
}
