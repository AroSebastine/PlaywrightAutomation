import { test, expect, Locator } from '@playwright/test'

test('scroll into view test', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/contact-sales')
    await page.getByRole('button', { name: 'Allow all' }).click()

    const pageLogo = page.getByAltText('OrangeHRM Logo').first()
    await pageLogo.screenshot({
        path: './screenshots/logo.png'
    })

    const talkToAnExpertForm: Locator = page.locator('#Form_getForm') 
        await talkToAnExpertForm.screenshot({
        path: './screenshots/form.png'
    })

    await page.screenshot({
        path: './screenshots/orange-crm-100.jpg',
        type: 'jpeg',
        quality: 100,
    })
    await page.screenshot({
        path: './screenshots/orange-crm-20.jpg',
        type: 'jpeg',
        quality: 20,
    })

    await page.screenshot({
        path: './screenshots/orange-crm-clipped.jpg',
        type: 'jpeg',
        clip: {
            x: 0,
            y: 50,
            width: 1000,
            height: 1000
        }
    })

    await page.screenshot({
        path: './screenshots/orange-crm-full-page.jpg',
        type: 'jpeg',
        fullPage: true,
    })

    // E.g. buffer is useful when uploading screenshot buffers to allure report api
    const imageBuffer: Buffer = await page.screenshot()
    console.log(imageBuffer.length);


    await page.pause()


})