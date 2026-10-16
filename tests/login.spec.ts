import {test,expect} from '@playwright/test'
import { Login_successful } from '../pages/LoginPage' 
import { ProductsPage } from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { testdata } from '../test-data/testData'

test.beforeEach(async ({page}) => {

    await page.goto("https://www.saucedemo.com/")

})

test("login",async({page})=>{

   //login test successfull
    const loginPage=new Login_successful(page)
    await loginPage.login_success(testdata.username, testdata.password)
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs')    
//product add successfull
    const Product_Page=new ProductsPage(page)
     await Product_Page.Product_Addcart()

    const cartPage =new CartPage(page)
    await cartPage.cartItems()
    await expect (cartPage.Itemcheck).toHaveText('Sauce Labs Bolt T-Shirt')

    const checkoutPage =new CheckoutPage(page)
    await checkoutPage.checkoutpage(testdata.firstname,testdata.lastname,testdata.pincode)
    await expect(checkoutPage.finalmsg).toHaveText('Thank you for your order!')


    /*await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
await page.waitForTimeout(5000)
await expect(page.locator('.app_logo')).toHaveText('Swag Labs')*/

    
})