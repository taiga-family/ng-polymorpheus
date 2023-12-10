import {
    ChangeDetectorRef,
    ComponentRef,
    Directive,
    DoCheck,
    Injector,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusContext} from '../classes/context';
import {PolymorpheusContent} from '../types/content';
import {PolymorpheusPrimitive} from '../types/primitive';
import {PolymorpheusTemplate} from './template';

@Directive({
    standalone: true,
    selector: '[polymorpheusOutlet]',
})
export class PolymorpheusOutlet<C> implements OnChanges, DoCheck {
    private c?: ComponentRef<unknown>;

    @Input('polymorpheusOutlet')
    content: PolymorpheusContent<C> = '';

    @Input('polymorpheusOutletContext')
    context?: C;

    constructor(
        private readonly vcr: ViewContainerRef,
        private readonly i: Injector,
        private readonly t: TemplateRef<PolymorpheusContext<PolymorpheusPrimitive>>,
    ) {}

    private get template(): TemplateRef<unknown> {
        if (isDirective(this.content)) {
            return this.content.template;
        }

        return this.content instanceof TemplateRef ? this.content : this.t;
    }

    static ngTemplateContextGuard<T>(
        _dir: PolymorpheusOutlet<T>,
        _ctx: any,
    ): _ctx is PolymorpheusContext<T extends PolymorpheusPrimitive ? T : never> {
        return true;
    }

    ngOnChanges({content}: SimpleChanges): void {
        const context = this.getContext();

        this.c?.injector.get(ChangeDetectorRef).markForCheck();

        if (!content) {
            return;
        }

        this.vcr.clear();

        const proxy =
            context &&
            (new Proxy(context as object, {
                get: (_, key) =>
                    this.getContext()?.[key as keyof (C | PolymorpheusContext<any>)],
            }) as unknown as C);

        if (isComponent(this.content)) {
            this.process(this.content, proxy);
        } else if (
            // eslint-disable-next-line eqeqeq
            (context instanceof PolymorpheusContext && context.$implicit) != null
        ) {
            this.vcr.createEmbeddedView(this.template, proxy, {injector: this.i});
        }
    }

    ngDoCheck(): void {
        if (isDirective(this.content)) {
            this.content.check();
        }
    }

    private getContext(): C | PolymorpheusContext<any> | undefined {
        if (isTemplate(this.content) || isComponent(this.content)) {
            return this.context;
        }

        return new PolymorpheusContext(
            this.context && typeof this.content === 'function'
                ? this.content(this.context)
                : this.content,
        );
    }

    private process(content: PolymorpheusComponent<unknown>, proxy?: C): void {
        const injector = content.createInjector(this.i, proxy);

        this.c = this.vcr.createComponent(content.component, {injector});
    }
}

function isDirective<C>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusTemplate<C> {
    return content instanceof PolymorpheusTemplate;
}

function isComponent<C>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusComponent<any> {
    return content instanceof PolymorpheusComponent;
}

function isTemplate<C>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusTemplate<C> | TemplateRef<C> {
    return isDirective(content) || content instanceof TemplateRef;
}
