import { Page, Locator, expect } from '@playwright/test';
export class Header{


    readonly page: Page;
    readonly logoLink: Locator;
    readonly primaryLogo: Locator;
    readonly transparentLogo: Locator;
    readonly threeLinks: Locator;
    readonly account: Locator;
    readonly searchLink: Locator;

    constructor(page: Page){

        this.page=page;
        this.logoLink=page.locator('a.Header__LogoLink');
        this.primaryLogo=page.locator('img.Header__LogoImage--primary');
        this.transparentLogo=page.locator('img.Header__LogoImage--transparent');
        this.threeLinks=page.locator('nav.Header__SecondaryNav');
        this.account=page.locator('nav.Header__SecondaryNav a.Link--primary:has-text("Account")');
        this.searchLink=page.locator('a[data-action="toggle-search"]');
    }

    async checkLogo(){
        await expect(this.logoLink).toBeVisible();
        await expect(this.primaryLogo).toHaveAttribute('alt', 'The Connected Shop Logo');
        await expect(this.primaryLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
        await expect(this.transparentLogo).toHaveAttribute('alt', 'The Connected Shop Logo White');
        await expect(this.transparentLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
    }
    async checkAccount(){
        await expect(this.account.getByText('account')).toBeVisible();
        await expect(this.account).toHaveText('Account');
    }
    async checkSearcLink(){
        await expect(this.searchLink.nth(0)).toBeVisible();
        await expect(this.searchLink).toHaveAttribute('data-action', "toggle-search");
        await expect(this.searchLink).toHaveAttribute('href', '/search');
    }
}