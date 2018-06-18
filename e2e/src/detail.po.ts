import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

export class DetailPage extends AppPage { 

    clickDeleteButton () {
        this.getDeleteButton().click();
    }
    getDeleteButton () {
        return this.getElementByCss('.delete-button');
    }

    clickSaveButton () {
        this.getSaveButton().click();
    }
    getSaveButton () {
        return this.getElementByCss('button.save-button');
    }

    fillNameFieldWithValue (value: string) {
        const input = this.getNameFieldInput();
        this.fillInputWithValue(input, value);
    }
    fillDescriptionFieldWithValue (value: string) {
        const input = this.getDescriptionFieldInput();
        this.fillInputWithValue(input, value);
    }
    fillInputWithValue (input: any, value: string) {
        input.clear();
        input.sendKeys(value);
    }
    getNameFieldInput () {
        return this.getElementByCss('input[name=name]');
    }
    getDescriptionFieldInput () {
        return this.getElementByCss('input[name=description]');
    }

    toggleShowDashBoardCheckbox () {
        this.getShowDashBoardCheckBox().click();
    }
    getShowDashBoardCheckBox () {
        return this.getElementByCss('mat-checkbox.show-dashboard-checkbox label.mat-checkbox-layout');
    }

    getNotificationMessageText () {
        return this.getNotificationMessage().getText();
    }
    getNotificationMessage () {
        return this.getElementByCss('.notification-message');
    }
}