class PerfomancePage {
    selectorsList() {
        const selectors = {
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            employeeNameField: "[placeholder='Type for hints...']",
            selectTitle: "[tabindex='0']",
            jobTitleField: ":nth-child(3) > span",
            subUnitField: ":nth-child(6) > span",
            includeField: ":nth-child(3) > span",
            noFoundAlert: ".oxd-toast"
        }
        return selectors
    }
    accessPerfomance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    fillPersonalDetails(employeeName) {
        cy.get(this.selectorsList().employeeNameField).clear().type(employeeName)
        cy.get(this.selectorsList().selectTitle).eq(0).click()
        cy.get(this.selectorsList().jobTitleField).click()
        cy.get(this.selectorsList().selectTitle).eq(1).click()
        cy.get(this.selectorsList().subUnitField).click()
        cy.get(this.selectorsList().selectTitle).eq(2).click()
        cy.get(this.selectorsList().includeField).click()


    }
    checkMessage() {
        cy.get('body').should('contain', 'No Records Found')
    }
}

export default PerfomancePage