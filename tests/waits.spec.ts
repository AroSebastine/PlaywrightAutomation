import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('waits tests', async ({ page }) => {

    await page.goto(naveenAutomationLabsLogin['register-url'], { timeout: 12000, waitUntil: 'load' });

    await page.waitForURL(/register/)
    const firstname = await page.locator('#input-firstname');

    (await page.waitForSelector('#input-firstname')).fill('Smart Aro')

    await page.waitForLoadState("domcontentloaded")

    await firstname.waitFor({
        state: 'visible',
        timeout: 4000
    })

    await firstname.fill('Smart Aro xx')
    await page.getByLabel('First Name').fill('Aro')
    await page.getByPlaceholder('Last Name').fill('Smart Ass')
    await page.getByRole('textbox', { name: 'E-Mail' }).fill('asnh152@gmail.com')
    await page.getByText('Telephone').fill('9677122801')
    await page.getByLabel('Password', { exact: true }).fill('Smart Aro' + ' 9677122801')
    await page.getByLabel('Password Confirm').fill('Smart Aro' + ' 9677122801')
    await page.getByText('Yes').click()
    await page.getByRole('checkbox').check()
    await page.getByText('Continue').click()
    const successMessage = await page.getByRole('heading', { level: 1, name: 'Your Account' })
    await successMessage.waitFor({
        state: 'visible'
    })


    await page.goto(naveenAutomationLabsLogin.url)
    await page.getByLabel('E-Mail Address').fill(naveenAutomationLabsLogin.username)
    await page.getByLabel('Password').fill(naveenAutomationLabsLogin.password)
    await page.getByRole('button', { name: 'Login' }).click()

    await page.waitForURL(/account\/account/)
    const accountHeader = page.getByRole('heading', { level: 2, name: 'My Account' })
    await accountHeader.waitFor({
        state: 'visible'
    })
    await page.pause()
})