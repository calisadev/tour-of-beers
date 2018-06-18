import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { DashboardPage } from './dashboard.po';
import { DatatablePage } from './datatable.po';
import { DetailPage } from './detail.po';

describe('tour-of-beers e2e test', () => {
    let mainPage: AppPage;
    let dashboardPage: AppPage;
    let datatablePage: AppPage;
    let detailPage: AppPage;

    const beerName = 'beer-' + new Date().getTime();
    const beerNameUpdated = beerName + '-updated';
    const beerDesc = beerName + '-description';

    beforeEach(() => {
        this.mainPage = new AppPage();
        this.dashboardPage = new DashboardPage();
        this.datatablePage = new DatatablePage();
        this.detailPage = new DetailPage();
        this.mainPage.navigateToRoot();
    });

    it('create update delete, happy case', () => {
        expect(this.mainPage.getPageHeaderText()).toEqual('Beers dashboard');

        this.mainPage.clickMenuListButton();
        this.mainPage.wait();
        expect(this.datatablePage.getPageHeaderText()).toEqual('Beers list');

        this.datatablePage.clickCreateButton();
        this.datatablePage.wait();
        expect(this.detailPage.getPageHeaderText()).toEqual('Create new beer');

        this.detailPage.fillNameFieldWithValue(beerName);
        this.detailPage.fillDescriptionFieldWithValue(beerDesc);
        this.detailPage.toggleShowDashBoardCheckbox();
        this.detailPage.wait();
        this.detailPage.clickSaveButton()
        this.detailPage.wait();
        expect(this.detailPage.getPageHeaderText()).toEqual(beerName);

        this.mainPage.clickMenuDashboardButton();
        this.mainPage.wait();
        expect(this.dashboardPage.isBeerDisplayedOnDashboard(beerName)).toBeTruthy();

        this.mainPage.clickMenuListButton();
        this.mainPage.wait();
        expect(this.datatablePage.getPageHeaderText()).toEqual('Beers list');
        expect(this.datatablePage.isBeerDisplayedOnDatatable(beerName)).toBeTruthy();

        this.datatablePage.clickOnRowHasName(beerName)
        this.datatablePage.wait();
        expect(this.detailPage.getPageHeaderText()).toEqual(beerName);

        this.detailPage.fillNameFieldWithValue(beerNameUpdated);
        this.detailPage.toggleShowDashBoardCheckbox();
        this.detailPage.clickSaveButton();
        this.detailPage.wait();
        this.mainPage.clickMenuDashboardButton();
        this.mainPage.wait();
        expect(this.dashboardPage.isBeerDisplayedOnDashboard(beerNameUpdated)).toBeFalsy();

        this.mainPage.clickMenuListButton();
        this.mainPage.wait();
        expect(this.datatablePage.isBeerDisplayedOnDatatable(beerNameUpdated)).toBeTruthy();

        this.datatablePage.clickOnRowHasName(beerNameUpdated);
        this.datatablePage.wait();
        this.detailPage.clickDeleteButton();
        this.detailPage.wait();
        expect(this.datatablePage.getPageHeaderText()).toEqual('Beers list');
        expect(this.datatablePage.isBeerDisplayedOnDatatable(beerNameUpdated)).toBeFalsy();

        this.mainPage.clickMenuDashboardButton();
        this.mainPage.wait();
        expect(this.dashboardPage.isBeerDisplayedOnDashboard(beerNameUpdated)).toBeFalsy();
    });
});
