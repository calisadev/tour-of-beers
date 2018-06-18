import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

export class DashboardPage extends AppPage { 

    isBeerDisplayedOnDashboard (beerName: String) {
        return this.getDashboardCellLinkWithName(beerName).isPresent();
    }
    getDashboardCellLinkWithName (name: String) {
        return this.getElementByCss('.dashboard-cell-link[name="' + name + '"]');
    }
}