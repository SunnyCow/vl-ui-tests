import { type Page, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';

const LOGO = '.header__logo > a'

export class AfishaMainPage extends BasePage {
    url = 'https://vl.ru/afisha/vladivostok';

    async hasLogo() {
        await expect(this.page.locator(LOGO)).toBeVisible();
    }

    async clickLogo() {
        await this.page.locator(LOGO).click();
    }
}