import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo (path: string) {
        return browser.get(path);
    }
    navigateToRoot () {
        this.navigateTo('/');
    }
    wait () {
        browser.waitForAngular();
        browser.driver.sleep(1000);
    }
    getElementByCss (cssSelector: string) {
        return element(by.css(cssSelector));
    }
    getPageHeaderText () {
        return this.getElementByCss('.page-header.mat-card h1').getText();
    }
    clickMenuDashboardButton () {
        this.getMenuDashboardButton().click()
    }
    clickMenuListButton () {
        this.getMenuListButton().click()
    }

    getMenuDashboardButton () {
        return this.getElementByCss('.menu-dashboard-button');
    }
    getMenuListButton () {
        return this.getElementByCss('.menu-list-button');
    }
}
