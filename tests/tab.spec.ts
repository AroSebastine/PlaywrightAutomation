import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'
import { randomUUID } from 'crypto'

test('tab tests', async ({ page }) => {
    await page.goto(naveenAutomationLabsLogin['register-url'])
    await page.getByLabel('First Name').pressSequentially("Aro", { delay: 200 })
    await page.keyboard.press('Tab')
    await page.keyboard.type('Hendric', { delay: 200 })
    await page.keyboard.press('Tab')
    await page.keyboard.type(getRandomEmailAddress(), { delay: 200 })
    await page.keyboard.press('Tab')
    await page.keyboard.type('9677122801', { delay: 200 })
    await page.keyboard.press('Tab')
    await page.keyboard.type('Aro123!', { delay: 200 })
    await page.keyboard.press('Tab')
    await page.keyboard.type('Aro123!', { delay: 200 })
    await page.keyboard.press('Tab')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('Tab')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Space')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    await page.pause()
})

function getRandomEmailAddress(): string {
    return 'aro' + Date.now().toString() + '@gmail.com'
    // return 'aro' + randomUUID() + '@gmail.com'
}
