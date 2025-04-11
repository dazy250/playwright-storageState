
import { test } from '../../fixtures/fixtures'

test('Test without storage state', async ({ mainPageFixture, securePageFixture }) => {
  await test.step(`WHEN: Unauthenticated user visits the main page`, async () => {
    await mainPageFixture.navigateTo();
  });
  
  await test.step(`THEN: Unauthenticated user sees secure page`, async () => {
    await securePageFixture.checkIfSecureMessageIsVisible();
  });
});