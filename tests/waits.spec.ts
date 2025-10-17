import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('waits tests', async({ page }) => {
    await page.goto(naveenAutomationLabsLogin['register-url'])
    const firstnameTextbox = await page.locator('#input-firstname1')
    firstnameTextbox.fill('Smart Aro')
})