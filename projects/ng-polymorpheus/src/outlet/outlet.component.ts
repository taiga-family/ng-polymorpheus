import {NgComponentOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentRef,
    ContentChild,
    DoCheck,
    Inject,
    Injector,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusContent} from '../types/content';
import {PolymorpheusPrimitive} from '../types/primitive';

/**
 * Outlet instantiating {@link PolymorpheusContent} with given context
 */
@Component({
    selector: 'polymorpheus-outlet',
    templateUrl: './outlet.template.html',
    styles: [':host { display: block; }'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolymorpheusOutletComponent<C extends object> implements DoCheck, OnChanges {
    @Input()
    content: PolymorpheusContent<C> | null = null;

    @Input()
    context!: C;

    @ContentChild(TemplateRef)
    readonly template: TemplateRef<C> | null = null;

    @ViewChild(NgComponentOutlet)
    readonly outlet?: NgComponentOutlet;

    constructor(@Inject(Injector) readonly injector: Injector) {}

    get primitive(): PolymorpheusPrimitive {
        if (
            !this.content ||
            this.isComponent(this.content) ||
            this.isTemplate(this.content)
        ) {
            return '';
        }

        return typeof this.content === 'function'
            ? this.content(this.context)
            : this.content;
    }

    isDirective(
        content: PolymorpheusContent<C> | null,
    ): content is PolymorpheusTemplate<C> {
        return content instanceof PolymorpheusTemplate;
    }

    isTemplate(
        content: PolymorpheusContent<C> | null,
    ): content is PolymorpheusTemplate<C> | TemplateRef<C> {
        return this.isDirective(content) || content instanceof TemplateRef;
    }

    isComponent(
        content: PolymorpheusContent<C> | null,
    ): content is PolymorpheusComponent<object, C> {
        return content instanceof PolymorpheusComponent;
    }

    getTemplate(
        content:
            | PolymorpheusComponent<object, C>
            | PolymorpheusTemplate<C>
            | TemplateRef<C>,
        componentTmp: TemplateRef<C>,
    ): TemplateRef<C> {
        if (this.isComponent(content)) {
            return componentTmp;
        }

        return this.isDirective(content) ? content.template : content;
    }

    ngOnChanges({content, context}: SimpleChanges) {
        // TODO: Keep an eye on private field, name can change
        const componentRef = (!content &&
            context &&
            this.outlet &&
            this.outlet['_componentRef']) as ComponentRef<object> | null | false;

        if (componentRef) {
            componentRef.injector.get(ChangeDetectorRef).markForCheck();
        }
    }

    ngDoCheck() {
        if (this.isDirective(this.content)) {
            this.content.check();
        }
    }
}
