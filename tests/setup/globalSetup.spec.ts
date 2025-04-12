import { test } from '../../fixtures/fixtures'


export const storageState = 'storageStates/storageState.json';

export const admin = {
    login: process.env.USER!,
    password: process.env.USER_PASSWORD!,
    storageStatePath: storageState,
  };

test('Global setup', async ({loginPageFixture}) => {
  console.log('Executing global setup');
  console.log(`BaseUrl: ${process.env.BASE_URL}`);
  
  await test.step('Given context for user is created', async () => {
    await loginPageFixture.POSTLogin();
    await loginPageFixture.request.storageState({ path: storageState });
  });

});
