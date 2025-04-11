import { Page, Locator, expect } from '@playwright/test';

export class MainPage{
    private readonly alert: Locator;
    private readonly logoutButton: Locator;

    constructor(public readonly page: Page) {
       this.page = page; 
       this.alert = page.getByText("You logged into a secure area!");
       this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async navigateTo(){
        await this.page.goto(`${process.env.BASE_URL!}/secure`,{
            waitUntil: 'load',
          });
    }

    async logout() {
        await this.logoutButton.click();
        await this.checkIfLogoutButtonIsVisible(false);
    }

    // ASSERTS
    async checkIfLogoutButtonIsVisible(isVisible: boolean = true) {
            await expect(this.logoutButton).toBeVisible({ visible: isVisible });
    }




}