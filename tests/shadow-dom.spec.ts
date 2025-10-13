import { test, expect} from '@playwright/test'

test('shadow dom tests', async({ page }) => {
    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/')

    await page.locator("#kils").fill('Aro')
    await page.locator("#pizza").fill('classic veg reg pizza')
    await page.pause()


})