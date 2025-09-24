import { Browser, chromium, Page, expect } from "@playwright/test"
import { naveenAutomationLabsLogin } from '../data/login.ts'
import { NaveenRetailStore } from '../pages/naveenretailstore.ts'

(async() =>{

    const browser: Browser = await chromium.launch({
        channel: 'chrome',
        headless: false,
    })

    const page: Page = await browser.newPage()
    await page.goto(naveenAutomationLabsLogin.url)
    const naveenRetailStore = new NaveenRetailStore(page)
    await naveenRetailStore.usernameTextbox.fill(naveenAutomationLabsLogin.username)
    await naveenRetailStore.passwordTextbox.fill(naveenAutomationLabsLogin.password)
    await naveenRetailStore.loginButton.click()

    await expect(page).toHaveURL(/opencart\/index.php\?route=account\/account/)   

    const placeholderAttributeOfSearchBox: string | null = await naveenRetailStore.searchTextbox.getAttribute('placeholder')

    console.log(placeholderAttributeOfSearchBox);

    await naveenRetailStore.searchTextbox.fill('apple')
    await naveenRetailStore.searchButton.click()

    const searchInput = await naveenRetailStore.searchTextbox.inputValue()

    console.log(searchInput);



    await page.pause()


}) ()