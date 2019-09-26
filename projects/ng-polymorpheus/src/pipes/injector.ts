import {Inject, Injector, Pipe, PipeTransform} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';

/**
 * Internal use {@link Pipe} to create {@link Injector}
 * only when either content or context change
 */
@Pipe({
    name: 'injector',
})
export class InjectorPipe<C extends object> implements PipeTransform {
    constructor(@Inject(Injector) private readonly injector: Injector) {}

    transform(content: PolymorpheusComponent<object, C>, context: C): Injector {
        return content.createInjector(this.injector, context);
    }
}
