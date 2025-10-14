import { test, expect } from '@playwright/test'

test('scroll into view test', async({ page }) => {
    await page.goto('https://www.orangehrm.com/en/contact-sales')
    await page.getByRole('button', { name: 'Allow all' }).click()
    await page.locator("//footer//a[contains(text(), 'CS & Support')]").scrollIntoViewIfNeeded()
    await page.pause()
})