import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://ratul.staging.dokandev.com/');


  await page.getByRole('link', { name: 'Login' }).click();


  await page.getByLabel('Email').fill('sazidistiaq@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('123456');

  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

});