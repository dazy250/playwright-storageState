

import { test } from '../../fixtures/fixtures'

//IMORTANT
test.use({ storageState: './storageStates/storageState.json' });

test('Test storage state for api request', async ({ loginPageFixture }) => {
  await test.step(``, async () => {
    await loginPageFixture.verifyLoggedUser(process.env.USER!, process.env.LASTNAME!);
  });

});

