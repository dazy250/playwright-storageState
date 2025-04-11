import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;

    constructor(public readonly page: Page) {
        this.userNameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.signInButton = page.getByRole('button', {name: 'Login'})
    }

    async navigateTo(){
        await this.page.goto(`${process.env.BASE_URL!}/login`,{
            waitUntil: 'load',
          });
    }

    async login(userName: string, password: string ) {
        await this.checkIfLoginPageContainerIsVisible();
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.clickLoginButton();
        await this.checkIfLoginPageContainerIsVisible(false);
    }

    private async fillUserName(login: string) {
        await this.userNameInput.fill(login);
    }

    private async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    private async clickLoginButton() {
        await  this.signInButton.click();
      }
    
    // ASSERTS
    async checkIfLoginPageContainerIsVisible(isVisible: boolean = true) {
        await expect(this.signInButton).toBeVisible({ visible: isVisible });
    }
}