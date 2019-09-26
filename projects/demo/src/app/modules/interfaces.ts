import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface IContextWithImplicit<T> {
    readonly $implicit: T;
}

export interface IContextWithActive<T> extends IContextWithImplicit<T> {
    readonly active: boolean;
}

export interface ICustomTab {
    text: string;
    content?: PolymorpheusContent<never>;
}
