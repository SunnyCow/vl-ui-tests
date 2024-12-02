import { type Page, type Locator, expect } from '@playwright/test';
import { BasePage } from '../basePage';


export class AfishaMainPage extends BasePage {
    readonly logo = '.header__logo > a';
    readonly searchBox;
    readonly searchButton;
    url = 'https://www.vldev.net/afisha/vladivostok';

    constructor(page: Page) {
        super(page);
        this.searchBox = page.getByRole('textbox', { name: 'Поиск' });
        this.searchButton = page.getByRole('button', { name: 'Поиск' });
    }

    async hasLogo() {
        await expect(this.page.locator(this.logo)).toBeVisible();
    }

    async clickLogo() {
        await this.page.locator(this.logo).click();
    }

    async searchBoxFillAndClick(query: string) {
        await this.searchBox.click();
        await this.searchBox.fill(query);
        await this.searchButton.click();
    }

    async openFirstEvent() {
        await this.page.locator('li:nth-child(16) > .event-list__info > .event-list__buy-link').click();
    }
}