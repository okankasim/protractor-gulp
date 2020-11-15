let instagram = require('../pages/instagram.page');
let commonAction = require('../utilities/common.js');



describe('Holland America', function () {

    it('Verify home page', function () {
        commonAction.verifyPage(instagram.username);
        console.log('Executed verify page')
        commonAction.enterText('naturistyc', instagram.username)
        console.log('Entered username enter')
        commonAction.enterText('cybertek2019', instagram.password)
        console.log('Entered password enter')
        commonAction.clickElement(instagram.loginButton)
        console.log('Executed login button click')
        try {
            commonAction.clickElement(instagram.notNow)
            console.log('Executed not now button 1 click')
            browser.sleep(2000)
            commonAction.clickElement(instagram.notNow)
            console.log('Executed not now button 2 click')
        } catch (e) {
            console.log(e)
        }
        const listOfTags =  [ '#washington','#dronephotography', '#washingtonstate', '#seattle', '#travelling', '#travel', '#traveller', '#nature', '#sunset', '#hiking', '#naturelovers', '#gezginler', '#gunbatimi', '#advanture', '#drone', '#evergreen']
            instagram.likeEachPhoto(listOfTags);
    });

});

