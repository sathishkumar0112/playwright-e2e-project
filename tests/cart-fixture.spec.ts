import { test, expect } from '../fixtures/testFixtures';

test('logged-in user sees products', async ({
  page,
  loggedInPage
}) => {
  await expect(page).toHaveURL(/inventory/);

  await expect(page.locator('.app_logo'))
    .toHaveText('Swag Labs');
});