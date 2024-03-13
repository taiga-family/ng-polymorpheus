export abstract class AbstractDemo {
    public abstract readonly example: {
        readonly HTML: string | {default: string};
        readonly Style: string | {default: string};
        readonly TypeScript: string | {default: string};
    };

    protected readonly tabs = ['HTML', 'Style', 'TypeScript'];

    protected activeTab: 'HTML' | 'Style' | 'TypeScript' = 'HTML';

    protected get code(): string {
        const code = this.example[this.activeTab];

        return typeof code === 'string' ? code : code.default;
    }
}
