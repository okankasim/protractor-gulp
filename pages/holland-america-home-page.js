let hollandAmericaElements = function()  {
    this.homePageFeaturedOffer = element(by.css("h2[role='heading']"));
    this.planTab= element(by.css("a[aria-label='Plan']"));
    this.findACruise =element(by.css("a[data-linktext='primary Nav:Plan:Find a Cruise']"));



    this.verifyHomePage = function(){
        expect(this.homePageFeaturedOffer.isDisplayed()).toBe(true);
    }

    this.navigateToFindCruise = () => {
        this.planTab.click();
        this.findACruise.click()
    }
}
module.exports = new hollandAmericaElements();