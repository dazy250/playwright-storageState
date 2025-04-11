import { Page } from '@playwright/test';
import { PageType } from './pageTypes';
import { LoginPage } from './loginPage';
import { MainPage } from './mainPage';
import { SecurePage } from './securePage';

export class PageFactory {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async createPage(pageType: PageType) {
        switch(pageType) {
            case PageType.LOGIN_PAGE:
                return new LoginPage(this.page);
            case PageType.MAIN_PAGE:
                return new MainPage(this.page);
            case PageType.SECURE_PAGE:
                return new SecurePage(this.page);
            default:
                throw new Error(`Unknown PageType provided for PageFactory.`);
        }
            
    }

}