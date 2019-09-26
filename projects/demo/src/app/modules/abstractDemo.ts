export abstract class AbstractDemo {
    abstract readonly example: {
        HTML: string;
        Style: string;
        TypeScript: string;
    };

    readonly tabs = ['HTML', 'Style', 'TypeScript'];

    activeTab: 'HTML' | 'Style' | 'TypeScript' = 'HTML';

    get code(): string {
        return this.example[this.activeTab];
    }
}
