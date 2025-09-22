import { test, expect } from '@playwright/test'


test.only("Check google's page title", async ({ page }) => {
    await page.goto("https://www.google.com")

    const googlePageTitle: string = await page.title()
    console.log('Page title: ' + googlePageTitle);
    await expect(page).toHaveTitle('Google')
    expect(googlePageTitle).toBe('Google')


})