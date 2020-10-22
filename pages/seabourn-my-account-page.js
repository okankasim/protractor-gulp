let myAccountPage = function() {
    this.createAccount = element(by.css('h2[class="heading"]'));
    this.registerButton = element(by.css('[class="cta-container"]>a'));
    this.loginError = element(by.css('[class="error-summary-wrapper"]> p'));
    this.emailInput = element(by.id('-login-email'));
    this.passwordInput = element(by.id('-login-password'));
    this.loginButton = element(by.css('[value="Log In"]'));
}
module.exports = new myAccountPage();