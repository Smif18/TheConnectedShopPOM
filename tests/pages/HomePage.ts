import { Page, expect } from '@playwright/test';
export class HomePage{


    readonly page: Page;


    constructor(page: Page){

        this.page=page;
    }

    async goTo(){
        await this.page.goto('https://theconnectedshop.com');
    }
    async checkTitle(){
        await expect(this.page).toHaveTitle("The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office");
    }
    async checkURL(){
        await expect(this.page).toHaveURL('https://theconnectedshop.com');
    }
   
}