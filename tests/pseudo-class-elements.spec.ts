import { test, expect, Locator } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('pseudo element test', async ({ page }) => {

    // await page.goto(naveenAutomationLabsLogin['register-url'])

    // const contentOfFirstNameLabel: string = await page.evaluate(() => {
    //     return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('content')
    // })

    // const colourOfFirstNameLabel: string = await page.evaluate(() => {
    //     return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('color')
    // })

    // console.log(contentOfFirstNameLabel);
    // console.log(colourOfFirstNameLabel);
    // if (contentOfFirstNameLabel.includes("*")) {
    //     console.log('First name is a mandatory field');
    // }


    await page.goto('https://www.orangehrm.com/en/contact-sales')

    const salesButton: Locator = await page.getByRole('button', { name: 'Contact Sales' }).first()

    const backgroundColour = await salesButton.evaluate((ele) => {
        return getComputedStyle(ele).getPropertyValue('background-color')        
        // or return getComputedStyle(ele).backgroundColor
    })

    console.log(backgroundColour);
})