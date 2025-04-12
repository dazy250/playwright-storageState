import { test as base } from '@playwright/test';
import { ApiSandbox } from '../domain/api/apiSandbox';

type BaseFixture = {
  loginPageFixture: ApiSandbox;
};

export const test = base.extend<BaseFixture>({
  loginPageFixture: async ({ page }, use) => {
    const loginPageFixture = (await new ApiSandbox(page.request)) as ApiSandbox;
    await use(loginPageFixture);
  },
});

export { expect } from '@playwright/test';

