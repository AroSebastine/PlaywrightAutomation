import { test, expect, Locator } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('selenium testing search', async({ page }) => {

    await page.goto(naveenAutomationLabsLogin.url)
    const returningCustomerSection: string = await page.locator('div.well').filter({ hasText: 'Returning Customer' }).innerHTML()
    console.log(returningCustomerSection);

    /*

    await page.goto('https://www.google.com')

    const searchTextArea: Locator = page.getByRole('combobox', { name: 'Search' })
    await searchTextArea.fill('selenium testing')

    // const seleniumTutorial: Locator = page.getByText('selenium testing tutorial')
    const seleniumTutorial = page.locator('ul[role="listbox"] li div[role="option"]').filter({ hasText: 'tutorial' })

    await seleniumTutorial.click()
    */
/*
    await page.goto('https://www.amazon.in/')

    const searchBox = page.getByPlaceholder('Search Amazon.in')
    await searchBox.fill('iphone 18')

    await page.locator('div[role="gridcell"] div[role="button"]').filter({ hasText: 'gold' }).click()
*/

//     await page.goto('https://www.flipkart.com')







//   await page.goto('https://www.flipkart.com/');
//   await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
//   await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('iphone 18 2tb');
// //   await page.getByRole('link', { name: 'iphone 18 pro max 2tb' }).click();

//     await page.locator('a.oleBil div').filter({ hasText: 'one 18 pro max 2tb' }).click()





    await page.pause()


    


})