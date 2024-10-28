//Test git
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { Search } from './pages/Search';

test.describe('check Search function', () =>{
    let homePage:HomePage;
    let search:Search;

    test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        search = new Search(page);
        await homePage.goTo();
    })

    test('поиск существующего товара', async () => {
        await search.checkSearcLink();
        await search.checkLinkClicable();
        await search.checkSearchBar();
        await search.checkSearchInput();
        await search.checkSearchResult();
    })
})
