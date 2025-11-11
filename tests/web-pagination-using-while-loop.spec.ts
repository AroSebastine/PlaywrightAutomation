import { test, expect } from '@playwright/test'
import { practicePages } from '../data/login.ts'

test('web pagination while loop', async ({ page }) => {
    await page.goto(practicePages['selectors-hub-xpath'])
    const countryToSelect = 'India'

    while(true) {

        const country = page.locator(`//td[text()="${countryToSelect}"]`)
        const listOfCountryToSelect = await country.all()
        const isCountryAvailableInPage = listOfCountryToSelect.length > 0        
        const nextButton = page.getByRole('link', { name: 'Next' })       

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