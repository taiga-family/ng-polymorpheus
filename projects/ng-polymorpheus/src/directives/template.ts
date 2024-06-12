import {ChangeDetectorRef, Directive, inject, TemplateRef} from '@angular/core';

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
    private readonly cdr = inject(ChangeDetectorRef);
    public readonly template: TemplateRef<C>;
    public polymorpheus: C | '' = '';

    constructor(content?: TemplateRef<C> | null) {
        this.template = content ?? inject(TemplateRef<C>, {self: true});
    }

    public static ngTemplateContextGuard<T>(
        _dir: PolymorpheusTemplate<T>,
        _ctx: any,
    ): _ctx is T extends '' ? any : T {
        return true;
    }

    public check(): void {
        this.cdr.markForCheck();
    }
}
