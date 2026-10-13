import { test,expect } from '@playwright/test';
import { Addtocart } from '../pages/Addtocart';
import testdata from '../utils/testdata.json';

test('Verify if user is able to login using valid username and valid password', async ({ page }) => {
    const usernamevalue=testdata.validusername
    const passwordvalue=testdata.validpassword
    const addToCart = new Addtocart(page)
    await addToCart.navigateToApplication()
    await addToCart.clickLoginLink()
    await addToCart.enterUsername(usernamevalue)
    await addToCart.enterPassword(passwordvalue)
    await addToCart.clickLoginButton()
    await addToCart.verifySuccessfulLogin()
    await addToCart.selectProduct() 
    await addToCart.clickAddToCart()
    await addToCart.handleAddToCartAlert()
})