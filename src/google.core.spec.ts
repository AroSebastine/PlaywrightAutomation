import { Browser, chromium, expect, firefox, Page, webkit } from '@playwright/test'

// IIFE - Immediately invoked function expression
(async () => {
    const browser: Browser = await chromium.launch({
        // headless: false,
        channel: "chrome", // msedge, chrome,         - no channel support for firefox, webkit/safari, opera and brave
        // executablePath:`C:/Users/arose/AppData/Local/Programs/Opera/opera.exe` // for opera and brave instead of channel you need to provide 
        // the path to the exe files
    })
    const page: Page = await browser.newPage();
    await page.goto("http://www.google.com")

    const googlePageTitle: string = await page.title()
    console.log(googlePageTitle);
    expect(googlePageTitle).toBe('Google')
    // await page.close()
}) ();