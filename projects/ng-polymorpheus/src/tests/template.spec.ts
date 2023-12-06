import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

describe('PolymorpheusTemplate', () => {
    @Component({
        template: `
            <ng-container
                *polymorpheusOutlet="polymorpheus; context: context"
            ></ng-container>
            <ng-template
                #polymorpheus="polymorpheus"
                let-value
                [polymorpheus]="type"
            >
                {{ value.name }}
            </ng-template>
        `,
    })
    class TestComponent {
        context: {$implicit: {name: string}; sum: number} = {
            $implicit: {name: 'Alex'},
            sum: 237,
        };

        type!: {$implicit: {name: number}};
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate],
            declarations: [TestComponent],
            teardown: {destroyAfterEach: false},
        }).compileComponents();
    });

    it('Template typing works', () => {
        const fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();

        expect(fixture.nativeElement.textContent.trim()).toBe('Alex');
    });
});
