import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'
import { ElementUtil } from '../utils/ElementUtil.ts'

test('use element utils to automate nal login page', async({ page }) => {
    await page.goto(naveenAutomationLabsLogin.url)
    // await page.getByLabel('E-Mail Address').fill(naveenAutomationLabsLogin.username)
    // await page.getByRole('textbox', { name: 'Password' }).fill(naveenAutomationLabsLogin.password)
    // await page.locator("//input[@value='Login']").click()

    const element = new ElementUtil(page, 10000)
    await element.fill(page.getByLabel('E-Mail Address'), naveenAutomationLabsLogin.username)
    await element.typeSlowly(page.getByRole('textbox', { name: 'Password' }), naveenAutomationLabsLogin.password, 500)
    await element.click("//input[@value='Login']")
    await page.pause()
})