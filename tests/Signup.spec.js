import {test,expect} from '@playwright/test'
import { Signup } from '../pages/Signup'
import testdata from '../utils/testdata.json'

test('Verify if user is able to signup into application', async ({ page }) => {
    const usernamevalue=testdata.validusername
    const passwordvalue=testdata.validpassword
    const signup = new Signup(page)
    await signup.navigateToApplication()
    await signup.clickSignupLink()
    await signup.enterUsername(usernamevalue)
    await signup.enterPassword(passwordvalue)
    await signup.clickSignupButton()

    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept()
    })

    
})



test('Verify close functionality in signup modal', async ({ page }) => {
    const usernamevalue=testdata.validusername
    const passwordvalue=testdata.validpassword
    const signup = new Signup(page)
    await signup.navigateToApplication()
    await signup.clickSignupLink()
    await signup.enterUsername(usernamevalue)
    await signup.enterPassword(passwordvalue)
    await signup.clickCloseButton()
})