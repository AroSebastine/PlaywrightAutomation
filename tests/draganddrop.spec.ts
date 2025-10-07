import { test, expect } from '@playwright/test'

test('drag and drop test', async({ page }) => {

    /*
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')

    const source = page.locator('#column-a')
    const target = page.locator('#column-b')

    await page.waitForTimeout(2000)
    await source.dragTo(target)
    await expect(target).toContainText('A')
    await page.waitForTimeout(2000)
    
    

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    await page.getByText('right click me', { exact: true }).click({ button: "right" })
    const menuItems: string[] = await page.locator("ul[class*='context-menu-list'] li").allInnerTexts()
    console.log(menuItems);
    */

    await page.goto('https://api.jquery.com/dblclick')
    await page.waitForTimeout(2000)
    // await page.frameLocator("//div[@class='demo code-demo']/iframe").locator('//span[text()="Double click the block"]/preceding-sibling::div').click({ clickCount: 2 })
    await page.frameLocator("//div[@class='demo code-demo']/iframe").locator('//span[text()="Double click the block"]/preceding-sibling::div').dblclick()

    await page.pause()



})