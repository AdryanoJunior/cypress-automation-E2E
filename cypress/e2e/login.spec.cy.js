import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import FailLoginPage from '../pages/failLoginPage'
import DashboardPage from '../pages/dashboardPage'




const loginPage = new LoginPage()
const failLoginPage = new FailLoginPage
const dashboardPage = new DashboardPage()


describe('Login - Orange HRM Tests', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    
  })
  it('Login - Fail', () => {
    failLoginPage.accessLoginPage()
    failLoginPage.loginWithError(userData.userFail.username, userData.userFail.password)

    failLoginPage.wrongAlert()
    

  });
})