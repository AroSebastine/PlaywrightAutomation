import { test, expect, Page } from '@playwright/test'

test('custom dropdowns test', async({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html')

    await selectValueFromDropdown(page, 'language', 'python')
    await selectValueFromDropdown(page, 'framework', 'angular')
    await selectValueFromDropdown(page, 'database', 'mssql')
    await selectValueFromDropdown(page, 'cloud', 'azure')
    await selectValueFromDropdown(page, 'editor', 'vscode')
    await selectValueFromDropdown(page, 'experience', 'expert')

    await page.goto('https://react-select.com/home')
    await page.locator("//input[@id='react-select-3-input']").click()
    await page.getByText('Green').click()
    expect(page.locator("//input[@id='react-select-3-input']/parent::div/preceding-sibling::div")).toContainText('Green')
    await page.pause()
})

async function selectValueFromDropdown(page: Page, dropdownName: string, dropdownValue: string ) {
    await page.locator(`//div[@data-name="${dropdownName}"]`).click()
    await page.locator(`//div[@data-value="${dropdownValue}"]`).click()
    const selectedOption = await page.locator(`//div[@data-name="${dropdownName}"]`).locator('.select-trigger.selected').innerText()    
    expect(await page.locator(`//div[@data-name="${dropdownName}"]`).locator('div.option.selected')).toContainText(selectedOption)
}


