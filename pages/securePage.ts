import { Page, Locator, expect } from '@playwright/test';

export class SecurePage{
    private readonly alert: Locator;
    

    constructor(public readonly page: Page) {
       this.page = page; 
       this.alert = page.getByText("You must login to view the secure area!");
    }

    // ASSERTS
    async checkIfSecureMessageIsVisible() {
        await expect(this.alert).toBeVisible();
    }




}