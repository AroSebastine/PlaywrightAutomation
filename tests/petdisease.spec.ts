import { test, expect, Locator } from '@playwright/test'

test('US pet disease map', async({ page }) => {

    await page.goto('https://petdiseasealerts.org/forecast-map#/', { waitUntil: 'load' })
    await page.waitForTimeout(5000)
    const stateLocators: Locator[] = await page.frameLocator('iframe[id*="map-instance"]').locator("//*[local-name()='svg' and @id='map-svg']//*[local-name()='g' and @id='regions']/*[local-name()='g']").all()
    // console.log(stateLocators);

    for(let stateLocator of stateLocators)  {

        await stateLocator.scrollIntoViewIfNeeded()
        // await page.waitForTimeout(5000)

        const boundingBox = await stateLocator.boundingBox()
        // console.log(boundingBox);
        if(boundingBox) {
           await page.mouse.move((boundingBox.width/2 + boundingBox.x), (boundingBox.height/2 + boundingBox.y)) 
           await page.waitForTimeout(500)
        }
        // await page.mouse.move((boundingBox?.height + boundingBox.y/2), (boundingBox?.width + boundingBox.y/2))
        
        console.log(await stateLocator.getAttribute('id'));
        await page.waitForTimeout(500)
    }

    await page.pause()


})

