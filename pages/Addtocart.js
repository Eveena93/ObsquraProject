import { expect } from "@playwright/test";

export class Addtocart {

    constructor(page) {

    this.page = page
    this.loginLink = page.locator('#login2')
    this.username = page.locator('#loginusername')
    this.password = page.locator('#loginpassword')
    this.loginButton =page.locator('button[onclick="logIn()"]')
    this.welcomeText =page.locator('#nameofuser')
    this.product = page.getByRole('link',{name: 'Samsung galaxy s6'})
    this.addToCartButton = page.getByText('Add to cart')
    
    }

    async navigateToApplication() {
        await this.page.goto('https://www.demoblaze.com/')
}

    async clickLoginLink() {
        await this.loginLink.click()
    }

    async enterUsername(usernamevalue) {
        await this.username.fill(usernamevalue)
    }

    async enterPassword(passwordvalue) {
        await this.password.fill(passwordvalue)
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async verifySuccessfulLogin() {
        await expect(this.welcomeText).toBeVisible()
    }

    async selectProduct() {
        await this.product.click()
    }

    async clickAddToCart() {
        await this.addToCartButton.click()
    }

    async handleAddToCartAlert(){
        this.page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept()
        })}
}