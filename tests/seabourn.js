let commonAction = require('../utilities/common.js');
let seabournHome= require("../pages/seabourn-home-page")
let seabournMyAccount = require('../pages/seabourn-my-account-page')



describe('Holland America', function () {

    it('Verify home page', function () {
      commonAction.verifyPageTitle('Luxury Cruises & Luxury Cruise Vacations | Seabourn', seabournHome.homePage)
    });
    
    it('Navigate to \"My account\" page and verify the title', () => {
        commonAction.clickElement(seabournHome.bookedGuests);
        commonAction.clickElement(seabournHome.myAccount);
        commonAction.verifyPageTitle('Log In to your Seabourn Account', seabournMyAccount.registerButton);

    });

    it('Enter invalid credentials and verify error message', () => {
        commonAction.enterText('Sait', seabournMyAccount.emailInput)
        commonAction.enterText('Dinc', seabournMyAccount.passwordInput)
        commonAction.clickElement(seabournMyAccount.loginButton)
        commonAction.verifyTextOnThePage(seabournMyAccount.loginError, 'Please enter a valid email address and password.')
    });

});

