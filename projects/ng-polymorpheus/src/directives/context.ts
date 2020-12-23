import {Directive, EmbeddedViewRef, Inject, ViewContainerRef} from '@angular/core';

/**
 * Helper directive, extracting first {@link EmbeddedViewRef} context if it's present
 */
@Directive({
    selector: '[context]',
    exportAs: 'context',
})
export class ContextDirective<C> {
    constructor(
        @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
    ) {}

    get context(): C | null {
        const viewRef = this.viewContainerRef.get(0) as EmbeddedViewRef<C> | null;

        return viewRef && viewRef.context;
    }
}
