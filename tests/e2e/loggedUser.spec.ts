
import { test } from '../../fixtures/fixtures'

test.use({ storageState: './storageStates/storageState.json' });

test('Test storage state', async ({ mainPageFixture }) => {
  await test.step(`WHEN: User opens the main page while logged in`, async () => {
    await mainPageFixture.navigateTo();
  });
  
  await test.step(`THEN: For authenticated user logout option is displayed`, async () => {
    await mainPageFixture.checkIfLogoutButtonIsVisible();
  });
});