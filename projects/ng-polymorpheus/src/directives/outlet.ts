import {
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    DoCheck,
    EmbeddedViewRef,
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
import {PolymorpheusTemplate} from './template';

@Directive({
    selector: '[polymorpheusOutlet]',
})
export class PolymorpheusOutletDirective<C extends Record<any, any>>
    implements OnChanges, DoCheck {
    private viewRef?: EmbeddedViewRef<unknown>;

    private componentRef?: ComponentRef<unknown>;

    @Input('polymorpheusOutlet')
    content: PolymorpheusContent<C> = '';

    @Input('polymorpheusOutletContext')
    context?: C;

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly injector: Injector,
        private readonly templateRef: TemplateRef<PolymorpheusContext<string>>,
    ) {}

    private get template(): TemplateRef<unknown> {
        if (isDirective(this.content)) {
            return this.content.template;
        }

        return this.content instanceof TemplateRef ? this.content : this.templateRef;
    }

    ngOnChanges({content}: SimpleChanges) {
        if (this.viewRef) {
            this.viewRef.context = this.getContext();
        }

        if (this.componentRef) {
            this.componentRef.injector.get(ChangeDetectorRef).markForCheck();
        }

        if (!content) {
            return;
        }

        this.viewContainerRef.clear();

        if (isComponent(this.content)) {
            const proxy =
                this.context &&
                new Proxy(this.context, {
                    get: (_, key) => this.context?.[key as keyof C],
                });
            const injector = this.content.createInjector(this.injector, proxy);
            const componentFactory = injector
                .get(ComponentFactoryResolver)
                .resolveComponentFactory(this.content.component);

            this.componentRef = this.viewContainerRef.createComponent(
                componentFactory,
                0,
                injector,
            );
        } else {
            this.viewRef = this.viewContainerRef.createEmbeddedView(
                this.template,
                this.getContext(),
            );
        }
    }

    ngDoCheck() {
        if (isDirective(this.content)) {
            this.content.check();
        }
    }

    static ngTemplateContextGuard<T>(
        _dir: PolymorpheusOutletDirective<T>,
        _ctx: any,
    ): _ctx is PolymorpheusContext<string> {
        return true;
    }

    private getContext(): unknown {
        if (isTemplate(this.content) || isComponent(this.content)) {
            return this.context;
        }

        return new PolymorpheusContext(
            typeof this.content === 'function'
                ? this.content(this.context!)
                : this.content,
        );
    }
}

function isDirective<C extends Record<any, any>>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusTemplate<C> {
    return content instanceof PolymorpheusTemplate;
}

function isComponent<C extends Record<any, any>>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusComponent<any, C> {
    return content instanceof PolymorpheusComponent;
}

function isTemplate<C extends Record<any, any>>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusTemplate<C> | TemplateRef<C> {
    return isDirective(content) || content instanceof TemplateRef;
}
