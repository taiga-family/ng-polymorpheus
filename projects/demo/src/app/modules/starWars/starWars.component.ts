import * as yoda from '!!file-loader!../../../../assets/yoda.png';
import * as luke from '!!file-loader!../../../../assets/luke.png';
import * as ben from '!!file-loader!../../../../assets/ben.png';
import * as vader from '!!file-loader!../../../../assets/vader.png';
import * as jedi from '!!file-loader!../../../../assets/jedi.png';
import * as sith from '!!file-loader!../../../../assets/sith.png';

import {ChangeDetectionStrategy, Component} from '@angular/core';

interface IStarWarsChar {
    readonly name: string;
    readonly avatar: string;
    readonly jedi: boolean;
}

@Component({
    selector: 'app-star-wars',
    templateUrl: './starWars.template.html',
    styleUrls: ['./starWars.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsComponent {
    readonly yoda = yoda;

    readonly stringify = ({name}: IStarWarsChar) => name;

    readonly items: ReadonlyArray<IStarWarsChar> = [
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
