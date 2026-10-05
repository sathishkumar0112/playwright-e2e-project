import { Page, Locator} from '@playwright/test'

export class Login_successful
{
    username:Locator;
    password:Locator;
    login_button:Locator;

    constructor(private page: Page)
{
   this.username= this.page.getByPlaceholder("Username") 
this.password=this.page.getByPlaceholder("Password")
this.login_button=this.page.locator('#login-button');

}

async login_success(u_name: string,p_word: string)
{
await this.username.fill(u_name)
await this.password.fill(p_word) 
await this.login_button.click()

}


}