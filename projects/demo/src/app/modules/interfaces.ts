import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface ContextWithImplicit<T> {
    readonly $implicit: T;
}

export interface ContextWithActive<T> extends ContextWithImplicit<T> {
    readonly active: boolean;
}

export interface CustomTab {
    text: string;
    content?: PolymorpheusContent<never>;
}
