import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('pseudo element test', async ({ page }) => {

    await page.goto(naveenAutomationLabsLogin['register-url'])

    const contentOfFirstNameLabel: string = await page.evaluate(() => {
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('content')
    })

    const colourOfFirstNameLabel: string = await page.evaluate(() => {
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('color')
    })

    console.log(contentOfFirstNameLabel);
    console.log(colourOfFirstNameLabel);
    if (contentOfFirstNameLabel.includes("*")) {
        console.log('First name is a mandatory field');
    }

})