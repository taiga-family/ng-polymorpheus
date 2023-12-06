import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';

import {ComboBoxComponent} from '../comboBox/comboBox.component';
import {ben, jedi, luke, sith, vader, yoda} from '../constants';

interface StarWarsChar {
    readonly name: string;
    readonly avatar: string;
    readonly jedi: boolean;
}

@Component({
    standalone: true,
    selector: 'app-star-wars',
    imports: [CommonModule, PolymorpheusOutlet, ComboBoxComponent],
    templateUrl: './starWars.template.html',
    styleUrls: ['./starWars.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsComponent {
    readonly yoda = yoda;

    readonly items: readonly StarWarsChar[] = [
        {
            name: 'Luke Skywalker',
            avatar: luke,
            jedi: true,
        },
        {
            name: 'Obi-Wan Kenobi',
            avatar: ben,
            jedi: true,
        },
        {
            name: 'Darth Maul',
            avatar: '',
            jedi: false,
        },
        {
            name: 'Darth Vader',
            avatar: vader,
            jedi: false,
        },
        {
            name: 'Mace Windu',
            avatar: '',
            jedi: true,
        },
    ];

    readonly stringify: (char: StarWarsChar) => string = ({name}) => name;

    getInitials(name: string): string {
        return name
            .split(' ')
            .map(word => word[0])
            .join('');
    }

    getRace(isJedi: boolean): string {
        return isJedi ? jedi : sith;
    }
}
