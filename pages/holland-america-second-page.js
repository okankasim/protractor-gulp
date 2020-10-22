let  hollandAmericaSecondPage = function()  {
   this.planViewResultFor = element(by.xpath("//span[@id='selected-value-sort-dropdown-deals-merge']"));
   this.secondPageSubHeader = element(by.xpath("//*[@id='searchresults']/div/div[3]"));
   this.sortRestults = element(by.css('[id=selected-value-sort-dropdown]'));
   this.alreadyBooked = element(by.css("a[aria-label='Already Booked']"));
   this.checkIn = element(by.xpath("//a[.='Check In']"));
   this.checkInHeader = element(by.css("[class='row header-container']"));


    this.verifyPage = () => {
        expect(this.secondPageSubHeader.isDisplayed()).toBe(true);
    }

    this.verifyTextOnThePage = (element, expectedValue) => {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 5000);
        expect(element.getText()).toBe(expectedValue);
    }
    this.clickElement = (element) => {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 5000);
        element.click();
    }
    this.verifyPageTitle = (expected, element) => {
        browser.wait(ExpectedConditions.visibilityOf(element), 5000);
        expect(browser.getTitle()).toBe(expected);
    }

}
module.exports = new hollandAmericaSecondPage();