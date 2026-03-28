import { test, expect } from '@playwright/test';

test('Update Profile', async ({ page }) => {
    await page.goto('https://ratul.staging.dokandev.com/');


    await page.getByRole('link', { name: 'Login' }).click();


    await page.getByLabel('Email').fill('sazidistiaq@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('123456');

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.locator('body > header > div.ky8cipx4.relative > div > div.ak9g9x9w.relative > div > div.ebxudwmy.relative.hide-on-tablet.hide-on-mobile > div > div > div > svg').click();

    await page.locator('#layers > div > a:nth-child(1)').click();

});