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
    readonly stringify = ({name}: IStarWarsChar) => name;

    readonly items: ReadonlyArray<IStarWarsChar> = [
        {
            name: 'Luke Skywalker',
            avatar: 'assets/luke.png',
            jedi: true,
        },
        {
            name: 'Obi-Wan Kenobi',
            avatar: 'assets/ben.png',
            jedi: true,
        },
        {
            name: 'Darth Maul',
            avatar: '',
            jedi: false,
        },
        {
            name: 'Darth Vader',
            avatar: 'assets/vader.png',
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
        return isJedi ? 'assets/jedi.png' : 'assets/sith.png';
    }
}
