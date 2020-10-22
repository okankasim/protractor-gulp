exports.config ={
  framework : "jasmine",  
  seleniumAddress: "http://localhost:4444/wd/hub",  

 multiCapabilities: [ 
{
      browserName: 'chrome',
			maxInstances: 2,
			shardTestFiles: true
}
],
 specs: ["../tests/holland-america-tests.js", '../tests/seabourn.js'],
  
suites: {
      holland: "./tests/holland-america-tests.js",
      seabourn: './tests/seabourn.js'
   },

jasmineNodeOpts: {
  showColors: true,
  defaultTimeoutInterval : 30000
},
  onPrepare: function(){ 
      browser.waitForAngularEnabled(false); 
      browser.get(browser.params.url)
      browser.manage().timeouts().implicitlyWait(10000);  
      browser.manage().window().maximize();     
   
      let HTMLReporter = require("protractor-beautiful-reporter");
      jasmine.getEnv().addReporter( 
          new HTMLReporter(  
              {
                  baseDirectory: "../Reports",
                  takeScreenShotOnlyForFailedSpecs: true
              }
           ).getJasmine2Reporter()
       );
  }
}
