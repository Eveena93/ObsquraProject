import { expect } from "@playwright/test";

export class Login {

    constructor(page) {

    this.page = page
    this.loginLink = page.locator('#login2')
    this.username = page.locator('#loginusername')
    this.password = page.locator('#loginpassword')
    this.loginButton =page.locator('button[onclick="logIn()"]')
    this.welcomeText =page.locator('#nameofuser')

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

    async validateLoginAlert(){
        this.page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept()
        })}
}