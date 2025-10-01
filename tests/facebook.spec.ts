import { expect, Locator, Page, test } from '@playwright/test'

test('Create FB account', async({ page }) => {

    await page.goto("https://www.facebook.com/")
    await page.locator('a[data-testid="open-registration-form-button"]').click()

    const dayDropdown: Locator = page.locator('#day')
    const monthDropdown: Locator = page.locator('#month')
    
    await dropdownSelectByValue(dayDropdown, '20')
    // select by visible text
    await dropdownSelectByVisibleText(monthDropdown, 'Feb')
    // await page.locator("#month").selectOption({ label: 'Feb' })
    // select by index
    await page.locator("#year").selectOption({ index: 9 })

    await page.pause()

})

async function dropdownSelectByValue(dayDropdown: Locator, selectOption: string): Promise<void> {        
    await dayDropdown.selectOption(selectOption)
    await expect(dayDropdown).toHaveValue(selectOption)
}

async function dropdownSelectByVisibleText(dayDropdown: Locator, selectOption: string): Promise<void> {        
    await dayDropdown.selectOption({ label: selectOption })
    const monthVisibleText: string = await dayDropdown.inputValue()
    await expect(dayDropdown).toHaveValue(monthVisibleText)
}