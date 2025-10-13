import { test, expect } from '@playwright/test'

test('js alert in page', async ({ page }) => {

    await page.goto('https://www.orangehrm.com/en/contact-sales')

    page.on('dialog', async dialog => {
        // Log the alert message to the console for verification
        console.log(`Alert message: ${dialog.message()}`);
        // Expect the message to contain the correct text
        expect(dialog.message()).toContain('Aro is smart.');
        // 2. Accept the dialog to close it
        await dialog.accept();
    });

    await page.waitForTimeout(2000)

    await page.evaluate(() => alert('Aro is smart.'))

    await page.pause()

})