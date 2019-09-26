import * as typescript from '!!raw-loader!../starWarsDemo/starWarsDemo.component.ts';
import * as css from '!!raw-loader!../starWarsDemo/starWarsDemo.style.less';
import * as html from '!!raw-loader!../starWarsDemo/starWarsDemo.template.html';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractDemo} from '../abstractDemo';

interface IStarWarsChar {
    readonly name: string;
    readonly avatar: string;
    readonly jedi: boolean;
}

@Component({
    selector: 'app-star-wars-demo',
    templateUrl: './starWarsDemo.template.html',
    styleUrls: ['./starWarsDemo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsDemoComponent extends AbstractDemo {
    readonly example = {
        HTML: html.replace(/<p>(.|\n|\r)*?<\/pre>/gm, ''),
        Style: css,
        TypeScript: typescript
            .replace(
                /import(.|\n|\r)*?'!!raw-loader!..\/starWarsDemo\/starWarsDemo.template.html';/gm,
                '',
            )
            .replace(
                /readonly example(.|\n|\r)*?};([\n\r]{2})/gm,
                '',
            ),
    };

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
