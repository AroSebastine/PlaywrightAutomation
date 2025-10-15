import { test, Page } from '@playwright/test'

test('new window test', async ({ page }) => {
    test.setTimeout(120000)
    await page.goto('https://www.orangehrm.com/en/contact-sales', { waitUntil: 'domcontentloaded' })    
    page.on('framenavigated', async () => {
        const allowCookieButton = page.getByRole('button', { name: 'Allow all' })
        if (await allowCookieButton.isVisible()) {
            await allowCookieButton.click()
        }
    })
    const [linkedinPage] = await Promise.all(([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href,"linkedin")]').click()
    ]))

    await getPageTitleAndClose(linkedinPage, 'Linkedin Title:')
    await page.waitForTimeout(4000)

    const [facebookPage] = await Promise.all(([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href,"facebook")]').click()
    ]))

    await getPageTitleAndClose(facebookPage, 'Facebook Title:')
    await page.waitForTimeout(4000)

    const [xPage] = await Promise.all(([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href,"x.com")]').click()
    ]))
    await getPageTitleAndClose(xPage, 'X Title:')
    await page.waitForTimeout(4000)

    const [youtubePage] = await Promise.all(([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href,"youtube")]').click()
    ]))
    await getPageTitleAndClose(youtubePage, 'Youtube Title:')
    await page.waitForTimeout(4000)

    await page.bringToFront() // optional: sometimes needed so safe to include this
    console.log('OrangeHRM Title: ', await page.title());
})

async function getPageTitleAndClose(pageInUse: Page, pageTitle: string) {
    await pageInUse.waitForTimeout(2000)
    await pageInUse.waitForLoadState('domcontentloaded')
    for (let i = 0; i < 3; i++) {
        try {
            console.log(pageTitle, await pageInUse.title());
            break
        } catch (error) {
            console.log((error as Error).message);
            await pageInUse.waitForLoadState('domcontentloaded', { timeout: 10000 })
        }
    }
    await pageInUse.close()
}