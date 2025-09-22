import { test, expect } from '@playwright/test'

test('check page title', async ({ page }) => {
    await page.goto('https://playwright.dev/', { waitUntil: 'load', referer: 'https:www.google.com' })

    await page.pause()
    
    console.log(await page.title());
})