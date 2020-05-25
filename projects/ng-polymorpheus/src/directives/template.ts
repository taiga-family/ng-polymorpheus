import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also storing {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    selector: 'ng-template[polymorpheus]',
    exportAs: 'polymorpheus',
})
export class PolymorpheusTemplate<T extends object> {
    constructor(
        @Inject(TemplateRef)
        @Self()
        readonly template: TemplateRef<T>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    check() {
        this.changeDetectorRef.markForCheck();
    }
}
