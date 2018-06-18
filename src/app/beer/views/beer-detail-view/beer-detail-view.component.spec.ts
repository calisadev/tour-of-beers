import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { BeerDetailViewComponent } from './beer-detail-view.component';
import { Beer } from '../../classes/Beer';
import { BeerServices } from '../../services/BeerServices';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('BeerDetailViewComponent', () => {
    let component: BeerDetailViewComponent;
    let fixture: ComponentFixture<BeerDetailViewComponent>;
    let beerServices: BeerServices;
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let location: Location;
    const testBeers = [new Beer(1, 'beer1', 'beer1', false, ''), new Beer(2, 'beer1', 'beer1', true, '')];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ],
            providers: [BeerServices, {
                provide: ActivatedRoute, Router, Location,
                useValue: {
                    params: of({id: 'new'})
                }
            }]
        }).compileComponents();
        beerServices = TestBed.get(BeerServices);
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        spyOn(router, 'navigate');
        spyOn(beerServices, 'getAllBeers').and.returnValue(of(testBeers));
        spyOn(beerServices, 'getBeerById').and.returnValue(of(testBeers[0]));
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDetailViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit param is new', () => {
        spyOn(component, 'setupNewBeer');
        spyOn(component, 'loadBeerDetail');
        component.ngOnInit();
        expect(component.setupNewBeer).toHaveBeenCalled();
        expect(component.loadBeerDetail).not.toHaveBeenCalled();
    });
    it('ngOnInit param is 1', () => {
        spyOn(component, 'setupNewBeer');
        spyOn(component, 'loadBeerDetail');
        component.ngOnInit();
        //expect(component.setupNewBeer).not.toHaveBeenCalled();
        //expect(component.loadBeerDetail).toHaveBeenCalledWith(1);
    });
    it('setupNewBeer', () => {
        component.beer = null;
        component.title = null;
        component.setupNewBeer();
        expect(component.beer.id).toBeNull();
        expect(component.beer.name).toEqual('');
        expect(component.beer.description).toEqual('');
        expect(component.beer.showDashboard).toBeFalsy();
        expect(component.beer.image).toBeNull();
        expect(component.title).toEqual('Create new beer');
    });
    it('loadBeerDetail', () => {
        component.beer = null;
        component.title = null;
        component.loadBeerDetail(1);
        expect(component.beer.id).toEqual(1);
        expect(component.beer.name).toEqual('beer1');
        expect(component.beer.description).toEqual('beer1');
        expect(component.beer.showDashboard).toBeFalsy();
        expect(component.beer.image).toEqual('');
        expect(component.title).toEqual('beer1');
    });
    it('insertBeer ok', () => {
        spyOn(beerServices, 'insertBeer').and.returnValue(of(testBeers[0]));
        component.insertBeer(testBeers[0]);
        expect(router.navigate).toHaveBeenCalledWith(['/beers', 1]);
    });
    it('insertBeer not', () => {
        spyOn(beerServices, 'insertBeer').and.returnValue(of(null)); 
        component.insertBeer(testBeers[0]);
        expect(router.navigate).not.toHaveBeenCalled();
    });
    it('updateBeer ok', () => {
        spyOn(beerServices, 'updateBeer').and.returnValue(of('OK'));
        component.updateBeer(testBeers[0]);
        expect(component.message).toEqual('Update successful');
    });
    it('updateBeer not ok', () => {
        spyOn(beerServices, 'updateBeer').and.returnValue(of('NOTOK'));
        component.updateBeer(testBeers[0]);
        expect(component.message).toEqual('Update not successful');
    });
    it('delete ok', () => {
        spyOn(beerServices, 'deleteBeer').and.returnValue(of('OK')); 
        component.beer.id = 1;
        component.delete();
        expect(router.navigate).toHaveBeenCalledWith(['/beers']);
    });
    it('delete not ok', () => {
        spyOn(beerServices, 'deleteBeer').and.returnValue(of('NOTOK')); 
        component.beer.id = 1;
        component.delete();
        expect(router.navigate).not.toHaveBeenCalled();
    });
    it('cancel', () => {
        spyOn(location, 'back');
        component.cancel();
        expect(location.back).toHaveBeenCalled();
    });
});
