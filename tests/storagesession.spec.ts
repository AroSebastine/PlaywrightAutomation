import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('login session storage', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.locator('#input-email').fill(naveenAutomationLabsLogin.username)
    await page.locator('#input-password').fill(naveenAutomationLabsLogin.password)
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