import { test, page, expect } from '@playwright/test'

test('Registration', async ({ page }) => {
    await page.goto('https://ratul.staging.dokandev.com/');

    await page.getByRole('link', { name: 'Signup' }).click();

    await page.getByLabel('First Name').fill('Sazid');
    await page.getByLabel('Last Name').fill('Istiaq');
    await page.getByLabel('Email').fill('sazidistiaq@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('123456');
    await page.getByLabel('Confirm Password').fill('123456');
    await page.getByRole('button', { name: 'Create Account' }).click();

});