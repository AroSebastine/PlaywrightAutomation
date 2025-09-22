import { test, expect } from '@playwright/test'

test('browser navigation - backward and forward', async ({ page }) => {
    await page.goto('https://playwright.dev/')    
    // await page.getByRole('link', {name: 'Get started'}).click()
    console.log(await page.title())

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    console.log(await page.title());

    await page.goBack()
    console.log(await page.title());

    await page.goForward()
    console.log(await page.title());

    await page.reload() // refresh the page



    await page.waitForTimeout(5000)


})