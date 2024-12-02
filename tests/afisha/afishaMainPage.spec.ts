import { test, expect } from '@playwright/test';
import { AfishaMainPage } from '../../pages/afisha/afishaMainPage';

test('has title', async ({ page }) => {
  const afishaMainPage = new AfishaMainPage(page);
  await afishaMainPage.open();
  await expect(page).toHaveTitle("Афиша во Владивостоке");
});

test('has logo', async ({ page }) => {
  const afishaMainPage = new AfishaMainPage(page);
  await afishaMainPage.open();
  await afishaMainPage.hasLogo();
});

test('logo click opens main page vl.ru', async ({ page }) => {
  const afishaMainPage = new AfishaMainPage(page);
  await afishaMainPage.open();
  await afishaMainPage.clickLogo();
  await expect(page).toHaveURL('https://www.vl.ru/');
});

test('hover opens context menu for cities', async ({ page }) => {
  const afishaMainPage = new AfishaMainPage(page);
  await afishaMainPage.open();
  await page.locator('span').filter({ hasText: /^Владивосток$/ }).nth(1).hover();
  await expect(page.locator('.header__project > div:nth-child(2) > div:nth-child(2)')).toBeVisible();
});

test('search field works', async ({ page }) => {
  const afishaMainPage = new AfishaMainPage(page);
  await afishaMainPage.open();
  await afishaMainPage.searchBoxFillAndClick('концерт');
  await expect(page.locator('.event-list__item')).not.toBe(0);
});
