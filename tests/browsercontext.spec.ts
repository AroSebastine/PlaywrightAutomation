import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test'

test('browser context test', async () => {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    })

    const browserContext1: BrowserContext = await browser.newContext()
    const browserContext2: BrowserContext = await browser.newContext()

    const page1: Page = await browserContext1.newPage()
    const page2: Page = await browserContext2.newPage()

    await page1.goto('https://www.google.com')
    // await page1.pause()

    await page2.goto('https://app.stratavote.com')
    // await page2.pause()

    await browserContext1.close()
    await browserContext2.close()

    await browser.close()
})