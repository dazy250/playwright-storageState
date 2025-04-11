import { expect, Page, test } from '@playwright/test';
import { createCustomContext } from '../../common/user';

export const storageState = 'storageStates/storageState.json';

export const admin = {
    login: process.env.ADMIN!,
    password: process.env.ADMIN_PASSWORD!,
    storageStatePath: storageState,
  };

test('Global setup', async () => {
  console.log('Executing global setup');
  console.log(`BaseUrl: ${process.env.BASE_URL}`);

  let page: Page;
  await test.step('Given context for user is created', async () => {
    page = await createCustomContext(admin);
    await page.close();
  });

});
