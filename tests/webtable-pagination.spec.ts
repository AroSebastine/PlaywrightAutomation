import { practicePages } from '../data/login.ts'
import { test, expect, Locator } from '@playwright/test'

test('xpath practice, web pagination tests', async ({ page }) => {
    await page.goto(practicePages['selectors-hub-xpath'])

    await mainLogic()

    async function mainLogic() {
        
        const allRows: Locator[] = await page.locator('//table[@id="tablepress-1"]//tbody/tr').all()
        const allCountriesInCurrentPage: string[] = await page.locator('//table[@id="tablepress-1"]//tbody/tr/td[@class="column-5"]').allInnerTexts() 
        const nextPage: Locator = page.locator('//button[contains(@class, "dt-paging-button") and contains(@class, "next")]')

        if (allCountriesInCurrentPage.includes('Hong Kong')) {            

            for (const eachRow of allRows) {                
                const country: string = await eachRow.locator('//td[@class="column-5"]').innerText()                
                
                if (country === "Hong Kong") {    

                    await eachRow.locator('//td[@class="column-1"]/input').check()
                    break
                }
            }
            
        } else if (await nextPage.isEnabled({ timeout: 3000 })) {
            await nextPage.click()
            await mainLogic()
        } else {
            console.log('The country Honk Kong is not found');
        }
    }
    await page.pause()
})