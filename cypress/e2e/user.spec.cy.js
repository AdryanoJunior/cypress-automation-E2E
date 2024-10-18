import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import PerfomancePage from '../pages/perfomancePage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const perfomancePage = new PerfomancePage()

describe('Orange HRM Tests', () => {

  it('User Info Changes - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.prefix(), chance.last())
    myInfoPage.fillDriversDetails(chance.zip(), chance.zip(), chance.timestamp(), chance.date({string: true, american: false}))
    myInfoPage.fillStatus()
    myInfoPage.saveStatus()
    myInfoPage.saveDetails()

    perfomancePage.accessPerfomance()
    perfomancePage.fillPersonalDetails('Employee Name')

    perfomancePage.checkMessage()

  })
  
  });