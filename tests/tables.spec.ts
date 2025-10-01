import { test, expect, Page, Locator } from '@playwright/test'



test('Webtable test', async ({ page }) => {

    await page.goto('https://www.espncricinfo.com/series/india-under-19s-tour-of-australia-2025-26-1503787/australia-under-19s-vs-india-under-19s-1st-youth-test-1503796/live-cricket-score')

    await getScore('Patel', page)

    // await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html')

    // const allOtherColumnValues: string[] = await page.locator('//td[text()="Joe.Root"]/following-sibling::td').allInnerTexts()

    // for(let e of allOtherColumnValues) {
    //     console.log(e);
    // }



    // await selectUser('Joe.Root', page)
    //await selectUserWithCSS('Joe.Root', page)

    // const allCheckboxLocators: Locator[] = await page.locator('//td/input[@type="checkbox"]').all()

    // for (let checkbox of allCheckboxLocators) {
    //     await checkbox.check()
    // }
    // for (let checkbox of allCheckboxLocators) {
    //     await checkbox.uncheck()
    // }




//ds-w-full ds-table ds-table-sm ds-table-auto 
// /a/span[contains(text(),"Vedant Trivedi")]/ancestor::td)[1]



    await page.pause()
})

const getScore = async function(name: string, page: Page) {

    const batsmanScore: string[] = await page.locator('//table[contains(@class,"ds-table-md")]//a/span[contains(text(),"Patel")]/ancestor::td/following-sibling::td[not (contains(@class,"ds-hidden"))]').allInnerTexts()
    console.log(batsmanScore);

    const batsmanScoreObject = {
        "Runs": `${batsmanScore[0]}`,
        "Balls": `${batsmanScore[1]}`,
        "Fours": `${batsmanScore[2]}`,
        "Sixes": `${batsmanScore[3]}`,
        "SR": `${batsmanScore[4]}`,
    }
    console.log(batsmanScoreObject);

}

/**
 * 
 * @param name 
 * @param page 
 */
async function selectUser(name: string, page: Page) {
    await page.locator(`//td[text()='${name}']/preceding-sibling::td/input`).check()
}

async function selectUserWithCSS(name: string, page: Page) {
    await page.locator(`tr:has(td:text('${name}'))`).locator(`input[type='checkbox']`).check()
}

