import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {ContextWithActive, CustomTab} from '../interfaces';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.template.html',
    styleUrls: ['./tab.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: ContextWithActive<CustomTab>,
    ) {}

    get text(): string {
        return this.context.$implicit.text;
    }

    get content(): PolymorpheusContent<never> | undefined {
        return this.context.$implicit.content;
    }

    get active(): boolean {
        return this.context.active;
    }

    get templateActive(): boolean {
        return (
            this.context.active &&
            this.context.$implicit.content instanceof PolymorpheusTemplate
        );
    }

    isNumber(primitive: number | string): primitive is number {
        return typeof primitive === 'number';
    }
}
