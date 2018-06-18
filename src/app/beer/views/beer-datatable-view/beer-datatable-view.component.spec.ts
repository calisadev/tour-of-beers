import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { BeerDatatableViewComponent } from './beer-datatable-view.component';
import { Beer } from '../../classes/Beer';
import { BeerServices } from '../../services/BeerServices';
import { of } from 'rxjs';

describe('BeerDatatableViewComponent', () => {
    let component: BeerDatatableViewComponent;
    let fixture: ComponentFixture<BeerDatatableViewComponent>;
    let beerServices: BeerServices;
    const testBeers = [new Beer(1, 'beer1', 'beer1', false, ''), new Beer(2, 'beer1', 'beer1', true, '')];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ],
            providers: [BeerServices]
        })
        .compileComponents();
        beerServices = TestBed.get(BeerServices);
        spyOn(beerServices, 'getAllBeers').and.returnValue(of(testBeers));
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDatatableViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit', () => {
        component.ngOnInit();
        expect(component.title).toEqual('Beers list');
        expect(component.beers.length).toEqual(2);
        expect(component.beers[0].id).toEqual(1);
        expect(component.beers[1].id).toEqual(2);
  });
});
