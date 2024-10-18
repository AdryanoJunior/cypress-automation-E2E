class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            dateCloseButton: '.--close',
            genericField: ".oxd-input--active",
            selectTextField: ".oxd-select-text--arrow",
            nationalityField: "[tabindex='0']",
            maritalStatusField: ".oxd-select-dropdown > :nth-child(2)",
            dateOfBirthField: "[placeholder='yyyy-dd-mm']",
            selectBlood: ".oxd-select-text",
            bloodTypeField: ":nth-child(6) > span",
            saveButton: "[type='submit']",
        }
        return selectors
    }
    fillPersonalDetails(firstname, middlename, lastname) {
      cy.get(this.selectorsList().firstNameField).clear().type(firstname)
      cy.get(this.selectorsList().middleNameField).clear().type(middlename)
      cy.get(this.selectorsList().lastNameField).clear().type(lastname)
    }

    fillDriversDetails(employeeId, otherId, driversNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    
    saveDetails() {
        cy.get(this.selectorsList().selectTextField).eq(0).click({force:true})
        cy.get('body').should('contain', 'Successfully Saved') 
    }

    fillStatus() {
        cy.get(this.selectorsList().nationalityField).eq(0).click()
        cy.get(this.selectorsList().selectTextField).eq(1).click()
        cy.get(this.selectorsList().maritalStatusField).click()
        cy.get(this.selectorsList().dateOfBirthField).eq(1).clear().type('2001-07-12')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectBlood).eq(2).click()
        cy.get(this.selectorsList().bloodTypeField).click()
    }
    
    saveStatus() {
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }


}


export default MyInfoPage