import { test, expect, Browser, Page, chromium } from '@playwright/test'

(async() => {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    })

    const page: Page = await browser.newPage()

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    await page.getByRole('textbox', { name: 'First Name' }).fill('Aro')

    await page.getByRole('checkbox').click()

    await page.getByRole('button', { name: 'Continue' }).click()

})()