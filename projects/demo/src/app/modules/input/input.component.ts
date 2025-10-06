import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'app-input',
    imports: [FormsModule, PolymorpheusOutlet],
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    public readonly content = input<PolymorpheusContent<never>>();
    public readonly placeholder = input('');
    public readonly value = model('');
}
