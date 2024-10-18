class FailLoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".oxd-button--main",
            wrongCredentialAlert: ".oxd-alert",

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithError(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        
    }

    wrongAlert() {
        cy.get('body').should('contain', 'Invalid credentials') 
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}


export default FailLoginPage