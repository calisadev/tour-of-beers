import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDatatableComponent } from './beer-datatable.component';
import { AppModule } from '../../../app.module';

describe('BeerDatatableComponent', () => {
    let component: BeerDatatableComponent;
    let fixture: ComponentFixture<BeerDatatableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDatatableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('datatable columes', () => {
        expect(component.displayedColumns.length).toEqual(5);
    });

    it('datatable columes name', () => {
        expect(component.displayedColumns[0]).toEqual('Id');
        expect(component.displayedColumns[1]).toEqual('Image');
        expect(component.displayedColumns[2]).toEqual('Name');
        expect(component.displayedColumns[3]).toEqual('Description');
        expect(component.displayedColumns[4]).toEqual('ShowDashboard');
    });
});
