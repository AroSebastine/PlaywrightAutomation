import { test, expect, Locator } from '@playwright/test'
import { time } from 'console'

test('dropdown tests', async({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/selectdropdowns.html')

    const countryDropdown = page.locator('#country')
    const experienceLevelDropdown = page.locator('#experience')
    const industryDropdown = page.locator('#industry')
    const projectSizeDropdown= page.locator('#project-size')
    const projectCommsStyleDropdown= page.locator('#communication')
    const timezoneDropdown= page.locator('#timezone')
    const saveButton= page.locator("button[@type='submit']")

    await selectDropdownValue(countryDropdown, "value", "au")
    await selectDropdownValue(experienceLevelDropdown, "visible text", "Advanced (5-8 years)")
    await selectDropdownValue(industryDropdown, "index", 7) // consulting and services
    await selectDropdownValue(projectSizeDropdown, "value", "medium-team")
    await selectDropdownValue(projectCommsStyleDropdown, "visible text", "Step-by-step instructions")
    await selectDropdownValue(timezoneDropdown, "index", 9) // IST
    await page.pause()

    
})

/**
 * 
 * @param loc 
 * @param selectType 
 * @param value 
 */
const selectDropdownValue = async function(loc: Locator, selectType: 'value' | 'visible text' | 'index', value: string | number ) {
    if(selectType === 'value' && typeof value === 'string') {
        await loc.selectOption(value)
        await expect(loc).toHaveValue(value)
    } else if(selectType === 'visible text' && typeof value === 'string') {
        await loc.selectOption({ label: value })
        const selectedOption = await loc.locator('option:checked').innerText()
        expect(selectedOption).toEqual(value)
    } else if(selectType === 'index' && typeof value === 'number'){
        await loc.selectOption({ index: value })
        const selectedValue = await loc.inputValue()        
        await expect(loc).toHaveValue(selectedValue)
    } else {
        throw new Error('incorrect dropdown value selection type supplied')
    }

}