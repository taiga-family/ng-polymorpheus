import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also storing {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    selector: 'ng-template[polymorpheus]',
    exportAs: 'polymorpheus',
    inputs: ['polymorpheus'],
})
export class PolymorpheusTemplate<T extends object> {
    polymorpheus!: T;

    constructor(
        @Inject(TemplateRef)
        @Self()
        readonly template: TemplateRef<T>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    check() {
        this.changeDetectorRef.markForCheck();
    }

    static ngTemplateContextGuard<T extends {}>(
        _dir: PolymorpheusTemplate<T>,
        _ctx: any,
    ): _ctx is T {
        return true;
    }
}
