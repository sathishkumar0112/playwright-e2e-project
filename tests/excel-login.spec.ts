
import { test, expect } from '@playwright/test';
import { Login_successful } from '../pages/LoginPage';
import * as XLSX from 'xlsx';


/*const filePath = path.resolve(
  process.cwd(),
  'test-data',
  'loginData.xlsx'
);
*/
const filePath = `${process.cwd()}/test-data/loginData.xlsx`;

console.log('Excel file path:', filePath);
console.log('File exists:', require('fs').existsSync(filePath));

const workbook = XLSX.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];



const loginData: {
  username: string;
  password: string;
}[] = XLSX.utils.sheet_to_json(worksheet);

console.log(loginData);

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
