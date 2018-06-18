import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDashboardViewComponent } from './beer-dashboard-view.component';
import { AppModule } from '../../../app.module';
import { Beer } from '../../classes/Beer';
import { BeerServices } from '../../services/BeerServices';
import { of } from 'rxjs';

describe('BeerDashboardViewComponent', () => {
    let component: BeerDashboardViewComponent;
    let fixture: ComponentFixture<BeerDashboardViewComponent>;
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
        fixture = TestBed.createComponent(BeerDashboardViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit', () => {
        component.ngOnInit();
        expect(component.title).toEqual('Beers dashboard');
        expect(component.beers.length).toEqual(1);
        expect(component.beers[0].id).toEqual(2);
    });

    it('filterShowDashboardBeers', () => {
        const filteredBeers = component.filterShowDashboardBeers(testBeers); 
        expect(filteredBeers.length).toEqual(1);
        expect(filteredBeers[0].id).toEqual(2);
    });
});
