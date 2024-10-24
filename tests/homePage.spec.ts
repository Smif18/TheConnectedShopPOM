import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('loadHomePage', ()=>{

    let homePage:HomePage;
test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        await homePage.goTo();
    })
test('Home page loads successfully', async ({ page }) => {
    await homePage.checkURL();
    await homePage.checkTitle();    
})

})
