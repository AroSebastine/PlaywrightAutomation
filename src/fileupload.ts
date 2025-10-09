import { Browser, Page, chromium } from '@playwright/test'

(async () => {

    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    })

    const page: Page = await browser.newPage()

    await page.goto('https://practice.expandtesting.com/upload')
    // input type = file must exist
    await page.getByTestId('file-input').setInputFiles('C:/Users/arose/Downloads/aro.docx')
    await page.locator('#fileSubmit').click()
    
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles([
        'C:/Users/arose/Downloads/aro.docx',
        'C:/Users/arose/Downloads/aro2.docx',
        'C:/Users/arose/Downloads/aro3.docx'
    ])

})()