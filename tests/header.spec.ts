import { test, expect } from '@playwright/test';
import { Header } from './pages/Header';
import { HomePage } from './pages/HomePage';

test.describe('checHeaderElements', ()=>{

    let homePage:HomePage;
    let header:Header;
    test.beforeEach(async({page})=>{
            homePage=new HomePage(page);
            await homePage.goTo();
            header = new Header(page);
        })

test('Header elements loads successfully', async () => {
    await header.checkLogo();
    await header.checkAccount();
    await header.checkSearcLink    
})

})