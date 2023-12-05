import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    NgModule,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PolymorpheusOutlet} from '@tinkoff/ng-polymorpheus';

import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {POLYMORPHEUS_CONTEXT} from '../tokens/context';
import {PolymorpheusContent} from '../types/content';

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
        element!: ElementRef<HTMLElement>;

        @ViewChild('plain')
        template!: TemplateRef<Record<never, never>>;

        @ViewChild('polymorpheus')
        polymorpheus!: PolymorpheusTemplate<Record<never, never>>;

        polymorphic = false;

        content: PolymorpheusContent = '';

        context: any = undefined;

        isNumber(primitive: number | string): boolean {
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
        constructor(@Inject(POLYMORPHEUS_CONTEXT) readonly context: any) {
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

    it('Empty by default', () => {
        expect(text()).toBe('');
    });

    it('Static type check exists', () => {
        // @ts-ignore
        expect(PolymorpheusTemplate.ngTemplateContextGuard({polymorpheus: {}})).toBe(
            true,
        );
    });

    it('Directive static type check exists', () => {
        // @ts-ignore
        expect(PolymorpheusTemplate.ngTemplateContextGuard({polymorpheus: {}})).toBe(
            true,
        );
    });

    describe('Primitive', () => {
        it('Works with strings', () => {
            testComponent.content = 'string';
            fixture.detectChanges();

            expect(text()).toBe('string');
        });

        it('Works with numbers', () => {
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

        it('Works with strings', () => {
            expect(text()).toBe('string');
        });

        it('Works with numbers', () => {
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
            it('Works with strings', () => {
                testComponent.content = 'string';
                fixture.detectChanges();

                expect(text()).toBe('String: string');
            });

            it('Works with numbers', () => {
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

            it('Works with strings', () => {
                expect(text()).toBe('String: string');
            });

            it('Works with numbers', () => {
                testComponent.context = {
                    $implicit: 237,
                };
                fixture.detectChanges();

                expect(text()).toBe('Number: 237');
            });
        });
    });

    it('TemplateRef', () => {
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

        it('Works', () => {
            fixture.detectChanges();

            expect(html()).toContain('<strong>string</strong>');
        });

        it('Triggers change detection', () => {
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
