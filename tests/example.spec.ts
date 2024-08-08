import { test, expect, Browser } from '@playwright/test';
import { AfishaMainPage } from '../pages/AfishaMainPage';

test('has title', async ({ page }) => {
  const afishaMain = new AfishaMainPage(page);
  await afishaMain.open();
  await expect(page).toHaveTitle("Афиша во Владивостоке");
});

test('has logo', async ({ page }) => {
  const afishaMain = new AfishaMainPage(page);
  await afishaMain.open();
  await expect(page.locator('.header__logo > a')).toBeVisible();
});

test('logo click opens main page vl.ru', async ({ page }) => {
  const afishaMain = new AfishaMainPage(page);
  await afishaMain.open();
  await afishaMain.clickLogo();
  await expect(page).toHaveURL('https://www.vl.ru/');
});

test('hover opens context menu for cities', async ({ page, browserName }) => {
  const afishaMain = new AfishaMainPage(page);
  await afishaMain.open();
  await page.locator('span').filter({ hasText: /^Владивосток$/ }).nth(1).hover();
  console.log(browserName);
  await page.screenshot({ path: './screenshots/hover-' + browserName + '.png'});
});
