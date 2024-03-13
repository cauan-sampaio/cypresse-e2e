/// <reference types="cypress" />

class LoginPage {
    get user() { return cy.get('#user_login') }
    get password() { return cy.get('#user_pass') }
    get loginButton() { return cy.get('#wp-submit') }
    
    login(user, pass) {
        this.user.type(user);
        this.password.type(pass);
        this.loginButton.click();
    }
}

export default new LoginPage();
