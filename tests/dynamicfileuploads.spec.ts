import { test, expect } from '@playwright/test'

test('dynamic file uploads test', async({ page }) => {
    // await page.goto('https://practice.expandtesting.com/upload')
    // await page.locator('#fileInput').setInputFiles([{
    //     name: 'random.docx',
    //     mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    //     buffer: Buffer.from('Aro is smart')
    // }])
    // await page.locator('#fileSubmit').click()
    

    await page.waitForTimeout(2000)
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
        await page.locator('#filesToUpload').setInputFiles([{
        name: 'random.docx',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        buffer: Buffer.from('Aro is smart')
    }, {
        name: 'random-x.png',
        mimeType: 'image/png',
        buffer: Buffer.from('Aro is smart - image')
    }])

    await page.pause()
})