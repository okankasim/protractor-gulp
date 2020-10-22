let commonAction = function() {

    this.clickElement = (element) => {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 10000);
        element.click();
    }

    this.verifyPageTitle = (expected, element) => {
        browser.wait(ExpectedConditions.visibilityOf(element), 10000);
        expect(browser.getTitle()).toBe(expected);
    }
    this.verifyTextOnThePage = (element, expectedValue) => {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 10000);
        expect(element.getText()).toBe(expectedValue);
    }

    this.enterText = (text, element) => {
        element.sendKeys(text)
    }

    this.verifyPage = (element) => {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 10000);
        expect(element.isDisplayed()).toBe(true);
    }
}
module.exports = new commonAction();