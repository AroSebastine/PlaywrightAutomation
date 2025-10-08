import { Browser, BrowserContext, chromium, Page } from '@playwright/test'

(async() => {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: "chrome"
    })

    const browserContext: BrowserContext = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    })

    const page: Page = await browserContext.newPage()
    await page.goto('https://the-internet.herokuapp.com/basic_auth')

    // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    await page.pause()
    
}

)()