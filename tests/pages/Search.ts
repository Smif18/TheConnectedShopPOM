import { Page, expect, Locator } from '@playwright/test';
export class Search {


    readonly page:Page;
    readonly searchLink: Locator;
    readonly searchBar: Locator;
    readonly searchInput: Locator;
    readonly searchResult: Locator;





    constructor (page:Page) {
        this.page=page;
        this.searchLink=page.locator('a[data-action="toggle-search"]').first();
        this.searchBar=page.locator('.Search__SearchBar');
        this.searchInput=page.locator('input[name="q"]');
        this.searchResult=page.locator('span.Heading.Text--subdued.u-h7').first();


    }
    async checkSearcLink(){
        await expect(this.searchLink.nth(0)).toBeVisible();
        await expect(this.searchLink).toHaveAttribute('data-action', "toggle-search");
        await expect(this.searchLink).toHaveAttribute('href', '/search');
    }
    async checkLinkClicable(){
        await this.searchLink.click();
    }
    async checkSearchBar(){
        await expect(this.searchBar).toBeVisible();
        await expect(this.searchBar).toBeTruthy();
    }

    async checkSearchInput(){
        await expect(this.searchInput).toBeVisible();
        await this.searchInput.fill('Smart Door Lock');
    }
    async checkSearchResult(){
        await expect(this.searchResult).toHaveText(/results/);
    }

    }


