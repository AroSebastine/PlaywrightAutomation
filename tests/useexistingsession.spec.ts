import { test, expect } from '@playwright/test'

test.use({storageState: 'auth/session.json'})
test('use existing session storage', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart')
    await page.waitForTimeout(5000)
})

test('use existubg', async ({ page }) => {
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/order')
    await page.pause()

})