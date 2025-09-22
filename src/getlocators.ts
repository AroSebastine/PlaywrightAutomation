import { test, expect, chromium, Browser, Page } from '@playwright/test'

(async() => {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
    })

    const page: Page = await browser.newPage()

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    const naveenImageAvailable = await page.getByAltText('naveenopencart').isVisible()
    expect(naveenImageAvailable).toBe(true)

    await page.getByTitle('naveenopencart').click()

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html')

    await page.getByTestId('username-input').pressSequentially('Aro Hendric', { delay: 450 }) //data-testid attribute of the element

})()