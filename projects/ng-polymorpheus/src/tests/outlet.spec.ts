import {CommonModule} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    NgModule,
    ViewChild,
} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {POLYMORPHEUS_CONTEXT} from '../tokens/context';
import type {PolymorpheusContent} from '../types/content';

let COUNTER = 0;

describe('PolymorpheusOutlet', () => {
    @Component({
        template: `
            <div
                *ngIf="polymorphic; else basic"
                #element
            >
                <ng-container
                    *polymorpheusOutlet="content as primitive; context: context"
                >
                    <div *ngIf="isNumber(primitive); else str">
                        Number: {{ primitive }}
                    </div>
                    <ng-template #str>String: {{ primitive }}</ng-template>
                </ng-container>
            </div>
            <ng-template #basic>
                <div #element>
                    <ng-container
                        *polymorpheusOutlet="content as primitive; context: context"
                    >
                        {{ primitive }}
                    </ng-container>
                </div>
            </ng-template>
            <ng-template
                #plain
                let-value
            >
                <strong>{{ value }}</strong>
            </ng-template>
            <ng-template
                #polymorpheus="polymorpheus"
                let-value
                polymorpheus
            >
                <strong>{{ value }}</strong>
            </ng-template>
        `,
    })
    class TestComponent {
        @ViewChild('element', {read: ElementRef})
        public element!: ElementRef<HTMLElement>;

        @ViewChild('plain')
        public template!: TemplateRef<Record<never, never>>;

        @ViewChild('polymorpheus')
        public polymorpheus!: PolymorpheusTemplate<Record<never, never>>;

        public polymorphic = false;

        public content: PolymorpheusContent = '';

        public context: any = undefined;

        public isNumber(primitive: number | string): boolean {
            return typeof primitive === 'number';
        }
    }

    @Component({
        template: `
            Component: {{ context.$implicit }}
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class ComponentContent {
        public readonly context = inject(POLYMORPHEUS_CONTEXT);

        constructor() {
            COUNTER++;
        }
    }

    @NgModule({
        declarations: [ComponentContent],
        exports: [ComponentContent],
    })
    class ComponentModule {}

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    function text(): string {
        return testComponent.element.nativeElement.textContent?.trim() ?? '';
    }

    function html(): string {
        return testComponent.element.nativeElement.innerHTML;
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                PolymorpheusOutlet,
                PolymorpheusTemplate,
                ComponentModule,
            ],
            declarations: [TestComponent],
            teardown: {destroyAfterEach: false},
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('empty by default', () => {
        expect(text()).toBe('');
    });

    it('static type check exists', () => {
        // @ts-ignore
        expect(PolymorpheusTemplate.ngTemplateContextGuard({polymorpheus: {}})).toBe(
            true,
        );
    });

    it('directive static type check exists', () => {
        // @ts-ignore
        expect(PolymorpheusOutlet.ngTemplateContextGuard({polymorpheus: {}})).toBe(true);
    });

    describe('Primitive', () => {
        it('works with strings', () => {
            testComponent.content = 'string';
            fixture.detectChanges();

            expect(text()).toBe('string');
        });

        it('works with numbers', () => {
            testComponent.content = 237;
            fixture.detectChanges();

            expect(text()).toBe('237');
        });
    });

    describe('Handler', () => {
        beforeEach(() => {
            testComponent.context = {
                $implicit: 'string',
            };
            testComponent.content = ({$implicit}) => $implicit;
            fixture.detectChanges();
        });

        it('works with strings', () => {
            expect(text()).toBe('string');
        });

        it('works with numbers', () => {
            testComponent.context = {
                $implicit: 237,
            };
            fixture.detectChanges();

            expect(text()).toBe('237');
        });
    });

    describe('Polymorphic', () => {
        beforeEach(() => {
            testComponent.polymorphic = true;
            fixture.detectChanges();
        });

        describe('Primitive', () => {
            it('works with strings', () => {
                testComponent.content = 'string';
                fixture.detectChanges();

                expect(text()).toBe('String: string');
            });

            it('works with numbers', () => {
                testComponent.content = 237;
                fixture.detectChanges();

                expect(text()).toBe('Number: 237');
            });
        });

        describe('Handler', () => {
            beforeEach(() => {
                testComponent.context = {
                    $implicit: 'string',
                };
                testComponent.content = ({$implicit}) => $implicit;
                fixture.detectChanges();
            });

            it('works with strings', () => {
                expect(text()).toBe('String: string');
            });

            it('works with numbers', () => {
                testComponent.context = {
                    $implicit: 237,
                };
                fixture.detectChanges();

                expect(text()).toBe('Number: 237');
            });
        });
    });

    it('templateRef', () => {
        testComponent.context = {
            $implicit: 'string',
        };
        testComponent.content = testComponent.template;
        fixture.detectChanges();

        expect(html()).toContain('<strong>string</strong>');
    });

    describe('PolymorpheusTemplate', () => {
        beforeEach(() => {
            testComponent.context = {
                $implicit: 'string',
            };
            testComponent.content = testComponent.polymorpheus;
        });

        it('works', () => {
            fixture.detectChanges();

            expect(html()).toContain('<strong>string</strong>');
        });

        it('triggers change detection', () => {
            // @ts-ignore
            const changeDetectionSpy = jest.spyOn(testComponent.polymorpheus, 'check');

            fixture.detectChanges();

            expect(changeDetectionSpy).toHaveBeenCalled();
        });
    });

    describe('PolymorpheusComponent', () => {
        it('creates component', () => {
            testComponent.context = {
                $implicit: 'string',
            };
            testComponent.content = new PolymorpheusComponent(ComponentContent);
            fixture.detectChanges();

            expect(text()).toBe('Component: string');
        });

        it('does not recreate component if context changes to the same shape', () => {
            testComponent.context = {
                $implicit: 'string',
            };
            testComponent.content = new PolymorpheusComponent(ComponentContent);
            fixture.detectChanges();

            const counter = COUNTER;

            testComponent.context = {
                $implicit: 'number',
            };
            fixture.detectChanges();

            expect(text()).toBe('Component: number');
            expect(COUNTER).toBe(counter);
        });
    });
});
