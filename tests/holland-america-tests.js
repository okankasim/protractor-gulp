let hollandAmericaHome = require('../pages/holland-america-home-page');
let hollandAmericaSecond = require("../pages/holland-america-second-page")
let commonAction = require('../utilities/common.js');



describe('Holland America', function () {

    it('Verify home page', function () {
        commonAction.verifyPage(hollandAmericaHome.homePageFeaturedOffer);
        commonAction.verifyPageTitle('Cruises, Cruise Ship Deals, Travel Cruises | Holland America', hollandAmericaHome.homePageFeaturedOffer )

    });

    it('Navigate to next page and verify', () => {
        hollandAmericaHome.navigateToFindCruise()
        commonAction.verifyPage(hollandAmericaSecond.secondPageSubHeader)
        commonAction.verifyPageTitle('Find a Cruise - Search for Cruises 2020 & 2021 | Holland America', hollandAmericaSecond.secondPageSubHeader)
        commonAction.verifyTextOnThePage(hollandAmericaSecond.planViewResultFor, "All Cruises");
    });
    it('Verify  sort result default value is \"Recommended\" ', () => {
        commonAction.verifyTextOnThePage(hollandAmericaSecond.sortRestults, "Recommended");
    });
    it('Select  and verify the text', () => {
        commonAction.clickElement(hollandAmericaSecond.alreadyBooked);
        commonAction.clickElement(hollandAmericaSecond.checkIn);
        commonAction.verifyPageTitle('Find Your Booking', hollandAmericaSecond.checkInHeader)
    });
});

