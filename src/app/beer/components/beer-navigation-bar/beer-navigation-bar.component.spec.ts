import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerNavigationBarComponent } from './beer-navigation-bar.component';
import { AppModule } from '../../../app.module';

describe('BeerNavigationBarComponent', () => {
    let component: BeerNavigationBarComponent;
    let fixture: ComponentFixture<BeerNavigationBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ AppModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerNavigationBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
