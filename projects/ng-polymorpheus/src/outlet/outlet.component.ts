import {NgComponentOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentRef,
    ContentChild,
    DoCheck,
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
    selector: '[polymorpheus-outlet]',
    templateUrl: './outlet.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolymorpheusOutletComponent<C extends object> implements DoCheck, OnChanges {
    @ContentChild(TemplateRef)
    readonly template: TemplateRef<C> | null = null;

    @ViewChild(NgComponentOutlet)
    readonly outlet?: NgComponentOutlet;

    @Input()
    content: PolymorpheusContent<C> | null = null;

    @Input()
    context!: C;

    get primitive(): PolymorpheusPrimitive {
        if (!this.content || this.isAdvanced(this.content)) {
            return '';
        }

        return typeof this.content === 'function'
            ? this.content(this.context)
            : this.content;
    }

    isAdvanced(
        content: PolymorpheusContent<C> | null,
    ): content is
        | PolymorpheusTemplate<C>
        | TemplateRef<C>
        | PolymorpheusComponent<object, C> {
        return isTemplate(content) || isComponent(content);
    }

    getTemplate(
        content:
            | PolymorpheusComponent<object, C>
            | PolymorpheusTemplate<C>
            | TemplateRef<C>,
        componentTmp: TemplateRef<C>,
    ): TemplateRef<C> {
        if (isComponent(content)) {
            return componentTmp;
        }

        return isDirective(content) ? content.template : content;
    }

    guard(
        content: PolymorpheusContent<C> | null,
    ): content is PolymorpheusComponent<object, C> {
        return isComponent(content);
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
        if (isDirective(this.content)) {
            this.content.check();
        }
    }
}

function isDirective<C extends object>(
    content: PolymorpheusContent<C> | null,
): content is PolymorpheusTemplate<C> {
    return content instanceof PolymorpheusTemplate;
}

function isComponent<C extends object>(
    content: PolymorpheusContent<C> | null,
): content is PolymorpheusComponent<object, C> {
    return content instanceof PolymorpheusComponent;
}

function isTemplate<C extends object>(
    content: PolymorpheusContent<C> | null,
): content is PolymorpheusTemplate<C> | TemplateRef<C> {
    return isDirective(content) || content instanceof TemplateRef;
}
