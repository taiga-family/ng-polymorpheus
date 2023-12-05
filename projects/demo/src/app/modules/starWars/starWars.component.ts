import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ben, jedi, luke, sith, vader, yoda} from '../constants';
import {PolymorpheusOutletDirective} from "@tinkoff/ng-polymorpheus";
import {ComboBoxComponent} from "../comboBox/comboBox.component";

interface StarWarsChar {
    readonly name: string;
    readonly avatar: string;
    readonly jedi: boolean;
}

@Component({
    selector: 'app-star-wars',
    templateUrl: './starWars.template.html',
    styleUrls: ['./starWars.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [PolymorpheusOutletDirective, ComboBoxComponent]
})
export class StarWarsComponent {
    readonly yoda = yoda;

    readonly stringify = ({name}: StarWarsChar) => name;

    readonly items: ReadonlyArray<StarWarsChar> = [
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
