import { test, expect } from '@playwright/test'

test.use({storageState: 'auth/saucelab-session.json'})
test('sauce lab', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/inventory.html')
    await page.pause()
})