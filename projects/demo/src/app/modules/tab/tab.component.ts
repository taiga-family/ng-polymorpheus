import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import type {ContextWithActive, CustomTab} from '../interfaces';

@Component({
    standalone: true,
    selector: 'app-tab',
    imports: [CommonModule, PolymorpheusOutlet],
    templateUrl: './tab.template.html',
    styleUrls: ['./tab.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
    private readonly context: ContextWithActive<CustomTab> =
        inject<any>(POLYMORPHEUS_CONTEXT);

    protected get text(): string {
        return this.context.$implicit.text;
    }

    protected get content(): PolymorpheusContent<never> | undefined {
        return this.context.$implicit.content;
    }

    protected get active(): boolean {
        return this.context.active;
    }

    protected get templateActive(): boolean {
        return (
            this.context.active &&
            this.context.$implicit.content instanceof PolymorpheusTemplate
        );
    }

    protected isNumber(primitive: number | string): primitive is number {
        return typeof primitive === 'number';
    }
}
