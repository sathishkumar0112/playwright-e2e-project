import { Page,Locator } from "@playwright/test";

export class ProductsPage
{
 
    Product_Button:Locator;

    constructor(private page: Page)
    {
        this.Product_Button=this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
   async Product_Addcart( )
{
 await this.Product_Button.click()
}
}