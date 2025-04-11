import { Page, chromium } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export type User = {
  login: string;
  password: string;
  storageStatePath: string;
};

export async function createUserContext(user: User) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    let page = await context.newPage();
    console.log(`Creating new context for user ${user.login}.`);
    const userLoginPage = new LoginPage(page);
    await userLoginPage.navigateTo();
    await userLoginPage.login(user.login!, user.password!);
    const storageState = user.storageStatePath;
    await page.context().storageState({ path: storageState });
    return page;
}