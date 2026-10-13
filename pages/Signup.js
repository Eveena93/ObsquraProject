export class Signup {

    constructor(page) {

        this.page = page
        this.signupLink = page.locator('#signin2')
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
        this.signupButton = page.locator("//button[text()='Sign up']")
        this.closeButton = page.locator('#signInModal button.btn-secondary')
    }

    async navigateToApplication() {
        await this.page.goto('https://www.demoblaze.com/')
    }

    async clickSignupLink() {
        await this.signupLink.click()
        await this.username.waitFor({ state:'visible' })
    }

    async enterUsername(usernamevalue) {
        await this.username.fill(usernamevalue)
    }

    async enterPassword(passwordvalue) {
        await this.password.fill(passwordvalue)
    }

    async clickSignupButton() {
        await this.signupButton.click()
    }

    async clickCloseButton() {
        await this.closeButton.click()
    }
}