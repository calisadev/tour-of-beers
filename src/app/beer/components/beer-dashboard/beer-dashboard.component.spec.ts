import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDashboardComponent } from './beer-dashboard.component';
import { AppModule } from '../../../app.module';

describe('BeerDashboardComponent', () => {
    let component: BeerDashboardComponent;
    let fixture: ComponentFixture<BeerDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
