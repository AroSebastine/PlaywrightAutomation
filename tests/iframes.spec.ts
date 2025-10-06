import { test, expect, Locator, FrameLocator } from '@playwright/test'

test('iframes test', async({ page }) => {
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/')
    await page.locator("//img[@title='Vehicle-Registration-Forms-and-Examples']").click()
    await page.frameLocator('//iframe[contains(@id,"frame-one")]').locator("//input[@id='RESULT_TextField-1']").fill('Aro')
    await page.locator("//a[@title='Get this form']").click()

    await page.goto('https://www.londonfreelance.org/courses/frames/index.html')
    console.log(await page.frameLocator("//frame[@name='main']").locator('h2').innerText());

    const numberOfFramesInThePage: Locator[] = await page.locator('//frame').all()
    console.log(numberOfFramesInThePage.length);

    for(let frame of numberOfFramesInThePage) {
        console.log(await frame.getAttribute('src'));
    }

    await page.goto("https://selectorshub.com/iframe-scenario")
    const frame1: FrameLocator = page.frameLocator("iframe[id='pact1']")
    const frame2: FrameLocator = frame1.frameLocator("iframe[id='pact2']")
    const frame3: FrameLocator = frame2.frameLocator("iframe[id='pact3']")

    await frame1.locator('#inp_val').fill('Aro')
    await frame2.locator('#jex').fill('Sebs')
    await frame3.locator('#glaf').fill('Nish')
    


    await page.pause()

}) 