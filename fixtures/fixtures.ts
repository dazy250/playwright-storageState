import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { PageType } from '../pages/pageTypes';
import { PageFactory } from '../pages/pageFactory';
import { MainPage } from '../pages/mainPage';
import { SecurePage } from '../pages/securePage'


type BaseFixture = {
  pageFactory: PageFactory;
  loginPageFixture: LoginPage;
  mainPageFixture: MainPage;
  securePageFixture: SecurePage;
};

export const test = base.extend<BaseFixture>({
  pageFactory: async ({ page }, use) => {
    const pageFactory = new PageFactory(page);
    await use(pageFactory);
  },

  loginPageFixture: async ({ pageFactory }, use) => {
    const loginPageFixture = (await pageFactory.createPage(PageType.LOGIN_PAGE)) as LoginPage;
    await use(loginPageFixture);
  },

  mainPageFixture: async ({ pageFactory }, use) => {
    const mainPageFixture = (await pageFactory.createPage(PageType.MAIN_PAGE)) as MainPage;
    await use(mainPageFixture);
  },

  securePageFixture: async ({ pageFactory }, use) => {
    const securePageFixture = (await pageFactory.createPage(PageType.SECURE_PAGE)) as SecurePage;
    await use(securePageFixture);
  },
  
});

export { expect } from '@playwright/test';

