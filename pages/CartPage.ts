import {Page,Locator} from '@playwright/test'

export class CartPage {

    Cartitems:Locator;
    Itemcheck:Locator;

constructor(private page:Page){
 this.Cartitems= this.page.locator('[data-test="shopping-cart-link"]')
//this.Itemcheck=this.page.locator('[data-test="inventory-item-name"]')
//this.Itemcheck = this.page.getByText('Sauce Labs Bolt T-Shirt')
this.Itemcheck=this.page.locator('[data-test="item-1-title-link"]')
}
async cartItems()
{
await this.Cartitems.click()
//await expect(this.Itemcheck.toHaveText('Sauce Labs Bolt T-Shirt')

}




}