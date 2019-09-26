import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    DoCheck,
    Input,
    TemplateRef,
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
export class PolymorpheusOutletComponent<C extends object> implements DoCheck {
    @Input()
    content: PolymorpheusContent<C> | null = null;

    @Input('context')
    set contextSetter(context: C) {
        // We need to make a shallow copy because ngTemplateOutlet mutates context:
        // https://github.com/angular/angular/issues/24515
        this.context = Object.assign({}, context);
    }

    context!: C;

    @ContentChild(TemplateRef)
    readonly template: TemplateRef<C> | null = null;

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

    getTemplate(content: PolymorpheusTemplate<C> | TemplateRef<C>): TemplateRef<C> {
        return this.isDirective(content) ? content.template : content;
    }

    ngDoCheck() {
        if (this.isDirective(this.content)) {
            this.content.check();
        }
    }
}
