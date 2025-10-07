import { test, expect } from '@playwright/test'

test('spicejet test', async({ page }) => {

    await page.goto('https://www.spicejet.com/')

    await page.getByText('Add-ons', { exact: true }).hover()
    await page.getByTestId('test-id-Taxi').click()    
    await page.pause()


})