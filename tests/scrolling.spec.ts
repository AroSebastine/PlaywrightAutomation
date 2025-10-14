import { test, expect } from '@playwright/test'

test('scroll into view test', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/contact-sales')
    await page.getByRole('button', { name: 'Allow all' }).click()
    await page.locator("//footer//a[contains(text(), 'CS & Support')]").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    await page.evaluate(async () => {
        // top
        window.scroll(0, 0)
        await new Promise(resolve => setTimeout(resolve, 5000));
        window.scroll(0, 1000)
        await new Promise(resolve => setTimeout(resolve, 5000));
        // bottom
        window.scroll(0, document.documentElement.scrollHeight)
        // window.scroll(0, document.body.scrollHeight) // either .body or .documentElement can be used.
        await new Promise(resolve => setTimeout(resolve, 5000));
        // top
        window.scroll(0, 0)

    })




    await page.pause()


})