import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    POLYMOPRHEUS_CONTEXT,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {IContextWithActive, ICustomTab} from '../interfaces';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.template.html',
    styleUrls: ['./tab.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
    constructor(
        @Inject(POLYMOPRHEUS_CONTEXT)
        private readonly context: IContextWithActive<ICustomTab>,
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
