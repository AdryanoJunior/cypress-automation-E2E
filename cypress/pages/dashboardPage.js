class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardLayout: ".orangehrm-upgrade-layout",
        }
        return selectors
    }
    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardLayout).should('be.visible')
    }

}


export default DashboardPage