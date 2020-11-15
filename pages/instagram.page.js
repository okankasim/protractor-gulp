const common = require('../utilities/common')

let instagram = function()  {
    this.username = element(by.css("[name='username']"));
    this.password= element(by.css("[name='password']"));
    this.loginButton =element(by.css("[type='submit']"));
    this.notNow= element(by.buttonText('Not Now'));
    this.searchInput =element(by.css("[placeholder='Search']"));
    this.suggestedTags =element(by.xpath('//*[@id="react-root"]/section/nav//div[4]//a[1]//span/span'));
    this.userProfileLink = element(by.xpath('/html/body/div[5]/div[2]/div/article/header/div[2]/div[1]/div[1]/span/a'));
    this.closeImageButton = element(by.xpath('/html/body/div[5]/div[3]/button'));
    this.likeButton = element(by.xpath('/html/body/div[5]/div[2]//article/div[3]/section[1]/span[1]/button'));
    this.centeredImage = element(by.xpath('/html/body/div[5]/div[2]/div/article/div[2]/div/div/div[2]'));
    this.tagPageHeader = element(by.css('[id="react-root"]>section>main>header img'));
    this.storyHeader = element(by.xpath('//*[@id="react-root"]/section/main/section/div[1]/div[1]'));
   
    this.likeEachPhoto = (listOFTags) => {
        const url = browser.getCurrentUrl();
        const tags = listOFTags;
        for( each of tags){
            let EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(this.storyHeader), 5000);
            common.waitAndEnterText(each, this.searchInput)
            console.log(`Entered the tag ${each}`)
            browser.sleep(400)
            common.clickElement(this.suggestedTags)
            console.log('Clicked suggested tag')
            // instagram.likeEachPhoto();
       

            for(var i =1; i<4; i++){
                for(var x =1; x<4; x ++){
                    const url2 = browser.getCurrentUrl();
                    const elem = browser.element(by.xpath('//*[@id="react-root"]/section/main/article/div[1]/div/div/div[' + i + ']/div['+ x + ']')); // each photo on tag results
                    browser.actions().mouseMove(elem).perform();
                    elem.click();
                    console.log(`Clicked row at ${i} and column ${x} photo`)
                    browser.sleep(100)
                    this.userProfileLink.click();
                    console.log('Clicked first tagged photo\'s profile')
                    element.all(by.css('[id="react-root"] main>div>div>article>div>div>div>div')).then(function(items) {
                        const num = items.length;
                        for(var i =0; i<num; i++){
                            browser.actions().mouseMove(items[i]).perform();
                            items[i].click();
                            console.log('Centered the image')
                            browser.sleep(800);
                            browser.actions().doubleClick(this.centeredImage).perform();
                            browser.sleep(200);
                            browser.actions().doubleClick(this.centeredImage).perform();
                        
                            //  element(by.xpath('/html/body/div[5]/div[2]/div/article/div[2]/div/div/div[2]')).click()
                            //  browser.sleep(100);
                            //  element(by.xpath('/html/body/div[5]/div[2]/div/article/div[2]/div/div/div[2]')).click()
                        
                            console.log('Double-clicked the image')
                            element(by.xpath('/html/body/div[5]/div[3]/button')).click(); // close button
                            console.log('Clicked close image button')
                            if(i===9){
                                break;
                            }
                        }
                    });

                    browser.navigate().to(url2)
                    console.log(`Navigated back to ${each} search result`)
                    browser.wait(EC.visibilityOf(this.tagPageHeader), 5000);
                } 
            }
         browser.navigate().to(url)
         console.log('Navigated back to home screen')
        }
    }
}
module.exports = new instagram();