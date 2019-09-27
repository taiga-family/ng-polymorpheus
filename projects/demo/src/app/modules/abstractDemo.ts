export abstract class AbstractDemo {
    abstract readonly example: {
        readonly HTML: string | { default: string };
        readonly Style: string | { default: string };
        readonly TypeScript: string | { default: string };
    };

    readonly tabs = ['HTML', 'Style', 'TypeScript'];

    activeTab: 'HTML' | 'Style' | 'TypeScript' = 'HTML';

    get code(): string {
        const code = this.example[this.activeTab];

        return typeof code === 'string' ? code : code.default;
    }
}
