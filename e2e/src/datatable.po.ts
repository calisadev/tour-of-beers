import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

export class DatatablePage extends AppPage { 

    clickCreateButton () {
        this.getCreateButton().click();
    }
    getCreateButton () {
        return this.getElementByCss('.create-button');
    }

    isBeerDisplayedOnDatatable (beerName: String) {
        return this.getRowLinkWithName(beerName).isPresent();
    }
    clickOnRowHasName (name: String) {
        this.getRowLinkWithName(name).click();
    }
    getRowLinkWithName (name: String) {
        return this.getElementByCss('.datatable-link[name="' + name + '"]');
    }
}