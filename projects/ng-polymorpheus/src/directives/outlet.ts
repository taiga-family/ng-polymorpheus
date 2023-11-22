import {
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    DoCheck,
    Injector,
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
    selector: '[polymorpheusOutlet]',
    inputs: ['content: polymorpheusOutlet', 'context: polymorpheusOutletContext'],
})
export class PolymorpheusOutletDirective<C> implements OnChanges, DoCheck {
    private c?: ComponentRef<unknown>;

    content: PolymorpheusContent<C> = '';
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

    ngOnChanges({content}: SimpleChanges): void {
        const context = this.getContext();

        this.c?.injector.get(ChangeDetectorRef).markForCheck();

        if (!content) {
            return;
        }

        this.vcr.clear();

        if (isComponent(this.content)) {
            this.process(this.content);
        } else if (
            // tslint:disable-next-line:triple-equals
            (context instanceof PolymorpheusContext && context.$implicit) != null
        ) {
            this.vcr.createEmbeddedView(
                this.template,
                context &&
                    (new Proxy(context as object, {
                        get: (_, key) =>
                            this.getContext()?.[
                                key as keyof (C | PolymorpheusContext<any>)
                            ],
                    }) as unknown as C),
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
    ): _ctx is PolymorpheusContext<T extends PolymorpheusPrimitive ? T : never> {
        return true;
    }

    private getContext(): C | undefined | PolymorpheusContext<any> {
        if (isTemplate(this.content) || isComponent(this.content)) {
            return this.context;
        }

        return new PolymorpheusContext(
            typeof this.content === 'function'
                ? this.content(this.context!)
                : this.content,
        );
    }

    private process(content: PolymorpheusComponent<unknown>): void {
        const injector = content.createInjector(
            this.i,
            this.context &&
                (new Proxy(this.context as unknown as object, {
                    get: (_, key) => this.context?.[key as keyof C],
                }) as unknown as C),
        );

        this.c = this.vcr.createComponent(
            injector
                .get(ComponentFactoryResolver)
                .resolveComponentFactory(content.component),
            0,
            injector,
        );
    }
}

function isDirective<C>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusTemplate<C> {
    return content instanceof PolymorpheusTemplate;
}

function isComponent<C>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusComponent<any, C> {
    return content instanceof PolymorpheusComponent;
}

function isTemplate<C>(
    content: PolymorpheusContent<C>,
): content is PolymorpheusTemplate<C> | TemplateRef<C> {
    return isDirective(content) || content instanceof TemplateRef;
}
