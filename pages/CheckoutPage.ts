import {Page,Locator} from "@playwright/test"

export class CheckoutPage{

checkout:Locator;
firstname:Locator;
lastname:Locator;
pincode:Locator;
continueButton:Locator;
finishButton:Locator;
finalmsg:Locator;

constructor(private page:Page)
{
 this.checkout= this.page.locator('[data-test="checkout"]')
 this.firstname = this.page.locator('[data-test="firstName"]')
 this.lastname = this.page.locator('[data-test="lastName"]')
 this.pincode = this.page.locator('[data-test="postalCode"]')
 this.continueButton = this.page.locator('[data-test="continue"]')
 this.finishButton = this.page.getByRole('button',{ name:'Finish'})   
 this.finalmsg=this.page.locator('[data-test="complete-header"]')
}
async checkoutpage(fname: string, lname: string, pin: string){
    await this.checkout.click()
    await this.firstname.fill(fname)
    await this.lastname.fill(lname)
    await this.pincode.fill(pin)
    await this.continueButton.click()
    await this.finishButton.click()
}



}