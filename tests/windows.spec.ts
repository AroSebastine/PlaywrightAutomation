import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test'

let browser: Browser
let context: BrowserContext
let page: Page

test('new windows test', async () => {

    browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    })

    context = await browser.newContext({
        recordVideo: {
            dir: './videos/', // Specify the directory to save videos
            size: { width: 1280, height: 720 } // Optional: set video dimensions
        }
    })
    page = await context.newPage()

    await page.goto('https://www.orangehrm.com/en/contact-sales')
    const OrangeHRMTitle = await page.title()

    const allowCookieButton = page.getByRole('button', { name: 'Allow all' })

    page.on('framenavigated', async () => {

        if (await allowCookieButton.isVisible()) {
            await allowCookieButton.click()
        }
    })

    await page.locator('//a[contains(@href,"linkedin")]').click()
    await page.locator('//a[contains(@href,"facebook")]').click()
    await page.locator('//a[contains(@href,"youtube")]').click()

    await page.waitForTimeout(3000)

    const pages: Page[] = context.pages()

    for (let eachPage of pages) {
        console.log(await eachPage.title());
        if (await eachPage.title() !== OrangeHRMTitle) {
            await eachPage.close()
        }
    }

    await pages[0].bringToFront()
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Smart Aro')

    await page.waitForTimeout(3000)
})
