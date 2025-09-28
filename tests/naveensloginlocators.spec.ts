import { test, expect, Locator } from '@playwright/test'
import * as login from '../data/login.ts'
import { NaveenRetailStore } from '../pages/naveenretailstore.ts'
import { text } from 'stream/consumers'

test('select an element from multiple elements', async( {page} ) => {
    await page.goto(login.naveenAutomationLabsLogin.url)
    
    const naveenRetailStore: NaveenRetailStore = new NaveenRetailStore(page)
    const allLinks: Locator = naveenRetailStore.allRightNavigationLinks
    const allLinkTexts: string[] = await allLinks.allInnerTexts()

    const footerLinkText: Locator[] = await naveenRetailStore.footerLinks.all()

    // for (let e of footerLinkText) {
    //     console.log(await e.innerText());
    // }

    const allLinksInThePage: string[] = await naveenRetailStore.allLinks.allInnerTexts()
    console.log(allLinksInThePage);

    // for(const text of allLinkTexts) {    

    //     if (text === 'Forgotten Password') {
    //         /* 
    //             Alternative locator options which are also valid
    //             const link = allLinks.filter({ hasText: text})
    //             const link = allLinks.locator(`text="${text}"`)
    //         */
    //         const link = allLinks.getByText(text)            
    //         await link.click()
    //         break
    //     }
    // }

    // for (const id in allLinkTexts) {
    //     console.log(allLinkTexts[id]);

    //     if(allLinkTexts[id] === 'Forgotten Password') {
    //         await allLinks.getByText(allLinkTexts[id]).click()
    //         break
    //     }
        
    // }

    // for(let i = 0; i < allLinkTexts.length; i++) {

    //     console.log(allLinkTexts[i]);

    //     if (allLinkTexts[i] === 'Forgotten Password') {
    //         await allLinks.filter({ hasText: allLinkTexts[i] }).click()
    //         break
    //     }


    // }

    await page.pause()
    

})