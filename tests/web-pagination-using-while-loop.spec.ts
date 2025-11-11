import { test, expect } from '@playwright/test'
import { practicePages } from '../data/login.ts'

test('web pagination while loop', async ({ page }) => {
    await page.goto(practicePages['selectors-hub-xpath'])
    const countryToSelect = 'India'
    const secoundCountryToSelect = 'Russia'

    while(true) {

        const country = page.locator(`//td[text()="${countryToSelect}" or text()="${secoundCountryToSelect}"]`)
        const listOfCountryToSelect = await country.all()
        const isCountryAvailableInPage = listOfCountryToSelect.length > 0        
        const nextButton = page.getByRole('link', { name: 'Next' })   
        // const nextButton = page.locator('//button[contains(@class, "dt-paging-button") and contains(@class, "next")]')    

        if(isCountryAvailableInPage) {
            for(const eachCountry of listOfCountryToSelect) {
                await  eachCountry.locator("xpath=./preceding-sibling::td/input").check()  
            }                      
        }                  

        if(await nextButton.isDisabled()){          
            console.log('No more pages to navigate to ... ');
            break
        }    

        await nextButton.click()               
        
    }
    await page.pause()
})