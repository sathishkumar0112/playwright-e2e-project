
import { test, expect } from '@playwright/test';
import { Login_successful } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

for (const user of loginData) {
  test(`Login test for ${user.username}`, async ({ page }) => {
    const loginPage = new Login_successful(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login_success(
      user.username,
      user.password
    );

    await expect(page).toHaveURL(/inventory/);
  });
}
