import { test, expect } from '@playwright/test'

test('login session storage', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.locator('#input-email').fill('march2024@open.com')
    await page.locator('#input-password').fill('Selenium@12345')
    await page.locator('//input[@value="Login"]').click()
    
    await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account')

    await page.context().storageState({ path: 'auth/session.json' })

})

test('sauce lab storage', async({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await page.context().storageState({path: 'auth/saucelab-session.json'})
})