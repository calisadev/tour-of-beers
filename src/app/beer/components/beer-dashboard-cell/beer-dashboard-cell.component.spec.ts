import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDashboardCellComponent } from './beer-dashboard-cell.component';
import { AppModule } from '../../../app.module';

describe('BeerDashboardCellComponent', () => {
    let component: BeerDashboardCellComponent;
    let fixture: ComponentFixture<BeerDashboardCellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDashboardCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
