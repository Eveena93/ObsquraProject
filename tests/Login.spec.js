import { test,expect } from '@playwright/test';
import { Login } from '../pages/Login';
import testdata from '../utils/testdata.json';

test('Verify if user is able to login using valid username and valid password', async ({ page }) => {
    const usernamevalue=testdata.validusername
    const passwordvalue=testdata.validpassword
    const login = new Login(page)
    await login.navigateToApplication()
    await login.clickLoginLink()
    await login.enterUsername(usernamevalue)
    await login.enterPassword(passwordvalue)
    await login.clickLoginButton()
    await login.verifySuccessfulLogin()
})



test('Verify if user is able to login using invalid username and valid password', async ({ page }) => {
    const usernamevalue=testdata.invalidusername
    const passwordvalue=testdata.validpassword
    const login = new Login(page)
    await login.navigateToApplication()
    await login.clickLoginLink()
    await login.enterUsername(usernamevalue)
    await login.enterPassword(passwordvalue)
    await login.validateLoginAlert()
    await login.clickLoginButton()
  
})

test('Verify if user is able to login using valid username and invalid password', async ({ page }) => {
    const usernamevalue=testdata.validusername
    const passwordvalue=testdata.invalidpassword
    const login = new Login(page)
    await login.navigateToApplication()
    await login.clickLoginLink()
    await login.enterUsername(usernamevalue)
    await login.enterPassword(passwordvalue)
    await login.validateLoginAlert()
    await login.clickLoginButton()
  
})

test('Verify if user is able to login using invalid username and invalid password', async ({ page }) => {
    const usernamevalue=testdata.invalidusername
    const passwordvalue=testdata.invalidpassword
    const login = new Login(page)
    await login.navigateToApplication()
    await login.clickLoginLink()
    await login.enterUsername(usernamevalue)
    await login.enterPassword(passwordvalue)
    await login.validateLoginAlert()
    await login.clickLoginButton()
  
})